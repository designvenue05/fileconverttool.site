// src/components/ConverterUI.tsx
'use client';

import { useState, useRef, useCallback } from 'react';
import { categories, API_URL } from '@/lib/conversions';
import { canConvert, incrementUsage, getDailyUsage } from '@/lib/rateLimit';
import { DownloadIcon, FileIcon, TrashIcon, LoaderIcon } from './Icons';
import Link from 'next/link';

const formatColors: Record<string, string> = {
  png: '#6C63FF', jpg: '#EF4444', jpeg: '#EF4444', webp: '#10B981', gif: '#F59E0B',
  bmp: '#F97316', svg: '#8B5CF6', tiff: '#3B82F6', ico: '#6366F1',
  mp4: '#EF4444', webm: '#10B981', avi: '#F59E0B', mov: '#3B82F6',
  mkv: '#8B5CF6', flv: '#F97316', wmv: '#6366F1',
  mp3: '#6C63FF', wav: '#3B82F6', aac: '#F59E0B', ogg: '#10B981',
  flac: '#EF4444', wma: '#F97316', m4a: '#8B5CF6',
};

interface FileEntry {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'converting' | 'done' | 'error';
  progress: number;
  downloadUrl?: string;
  error?: string;
}

interface ConverterUIProps {
  initialFrom?: string;
  initialTo?: string;
  initialCategory?: string;
}

export function ConverterUI({ initialFrom, initialTo, initialCategory }: ConverterUIProps) {
  const [fromFormat] = useState(initialFrom || '');
  const [toFormat, setToFormat] = useState(initialTo || '');
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentCat = categories.find(c => c.id === initialCategory) || categories[0];
  const fromColor = formatColors[fromFormat] || '#6C63FF';
  const toColor = formatColors[toFormat] || '#4F46E5';

  // Get available output formats (excluding the source format)
  const outputFormats = currentCat.toFormats.filter(f => f.value !== fromFormat);

  const handleFiles = useCallback((newFiles: FileList | File[]) => {
    const { allowed } = canConvert();
    if (!allowed) { setShowUpgradePrompt(true); return; }
    const entries: FileEntry[] = Array.from(newFiles).map(file => ({
      id: Math.random().toString(36).slice(2),
      file, status: 'pending' as const, progress: 0,
    }));
    setFiles(prev => [...prev, ...entries]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragOver(false);
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeFile = (id: string) => setFiles(prev => prev.filter(f => f.id !== id));

  const convertFiles = async () => {
    if (!fromFormat || !toFormat || files.length === 0) return;
    for (const entry of files) {
      if (entry.status !== 'pending') continue;
      const { allowed } = canConvert();
      if (!allowed) { setShowUpgradePrompt(true); return; }

      setFiles(prev => prev.map(f => f.id === entry.id ? { ...f, status: 'uploading', progress: 25 } : f));
      try {
        const formData = new FormData();
        formData.append('file', entry.file);
        formData.append('target_format', toFormat);

        setFiles(prev => prev.map(f => f.id === entry.id ? { ...f, status: 'converting', progress: 55 } : f));
        const response = await fetch(`${API_URL}/convert`, { method: 'POST', body: formData });
        if (!response.ok) {
          let errorMsg = 'Conversion failed';
          try {
            const errData = await response.json();
            errorMsg = typeof errData.detail === 'string' ? errData.detail : JSON.stringify(errData.detail || errData);
          } catch {}
          throw new Error(errorMsg);
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        incrementUsage();
        setFiles(prev => prev.map(f => f.id === entry.id ? { ...f, status: 'done', progress: 100, downloadUrl: url } : f));
      } catch (err: any) {
        const msg = typeof err === 'string' ? err : (err?.message || 'Conversion failed');
        setFiles(prev => prev.map(f => f.id === entry.id ? { ...f, status: 'error', progress: 0, error: msg } : f));
      }
    }
  };

  const downloadFile = (entry: FileEntry) => {
    if (!entry.downloadUrl) return;
    const a = document.createElement('a');
    a.href = entry.downloadUrl;
    a.download = `${entry.file.name.replace(/\.[^.]+$/, '')}.${toFormat}`;
    a.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-6">
      {/* ---- Large format badges ---- */}
      <div className="flex items-center justify-center gap-4">
        <span
          className="px-6 py-2.5 rounded-xl text-[16px] font-bold border-2"
          style={{
            color: fromColor,
            borderColor: fromColor,
            background: `${fromColor}08`,
          }}
        >
          .{fromFormat.toUpperCase()}
        </span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </span>
        <span
          className="px-6 py-2.5 rounded-xl text-[16px] font-bold border-2"
          style={{
            color: toColor,
            borderColor: toColor,
            background: `${toColor}08`,
          }}
        >
          .{toFormat.toUpperCase()}
        </span>
      </div>

      {/* ---- Title ---- */}
      <h2 className="text-center text-[20px] font-bold" style={{ color: 'var(--text-primary)' }}>
        {fromFormat.toUpperCase()} to {toFormat.toUpperCase()} Converter
      </h2>

      {/* ---- OUTPUT format chips ---- */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-[11px] font-bold uppercase tracking-wider mr-1" style={{ color: 'var(--text-muted)' }}>
          Output:
        </span>
        {outputFormats.map(fmt => {
          const c = formatColors[fmt.value] || '#6C63FF';
          const isActive = toFormat === fmt.value;
          return (
            <button
              key={fmt.value}
              onClick={() => setToFormat(fmt.value)}
              className="px-3.5 py-1.5 rounded-lg text-[12px] font-bold transition-all"
              style={{
                background: isActive ? c : 'transparent',
                color: isActive ? 'white' : c,
                border: `1.5px solid ${isActive ? c : `${c}30`}`,
              }}
            >
              .{fmt.label}
            </button>
          );
        })}
      </div>

      {/* ---- Drop zone ---- */}
      <div
        className={`rounded-2xl border-2 border-dashed p-10 sm:p-14 text-center transition-all cursor-pointer ${dragOver ? 'border-[var(--brand-500)] bg-[rgba(108,99,255,0.03)]' : ''}`}
        style={{
          borderColor: dragOver ? 'var(--brand-500)' : `${fromColor}30`,
          background: dragOver ? 'rgba(108,99,255,0.03)' : `${fromColor}03`,
        }}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          accept={`.${fromFormat}`}
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />

        {/* Cloud upload icon */}
        <div className="flex justify-center mb-5">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 32V18M24 18L18 24M24 18L30 24" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 36H34C38.4183 36 42 32.4183 42 28C42 24.2 39.3 21.1 35.7 20.2C35.9 19.5 36 18.8 36 18C36 12.48 31.52 8 26 8C21.4 8 17.5 11.1 16.4 15.4C12.3 15.8 9 19.3 9 23.5C9 28 12.58 31.5 17 32" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="text-[16px] font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
          Drag &amp; drop .{fromFormat.toUpperCase()} files here
        </p>

        <button
          className="btn-gradient !px-8 !py-3 !text-[14px] !rounded-xl"
          onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
        >
          Choose .{fromFormat.toUpperCase()} Files
        </button>

        <p className="mt-4 text-[12px]" style={{ color: 'var(--text-muted)' }}>
          Only .{fromFormat.toUpperCase()} files accepted
        </p>
      </div>

      {/* ---- File list ---- */}
      {files.length > 0 && (
        <div className="space-y-3 animate-fade-in">
          {files.map(entry => (
            <div key={entry.id} className="file-card">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${fromColor}10` }}>
                <FileIcon size={18} color={fromColor} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{entry.file.name}</p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{formatFileSize(entry.file.size)}</p>
                {(entry.status === 'uploading' || entry.status === 'converting') && (
                  <div className="progress-bar mt-2">
                    <div className="progress-bar-fill" style={{ width: `${entry.progress}%` }} />
                  </div>
                )}
                {entry.status === 'error' && (
                  <p className="text-[11px] mt-1 text-red-500">{entry.error}</p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {entry.status === 'done' && (
                  <button onClick={() => downloadFile(entry)} className="btn-gradient !py-2 !px-5 !text-[12px]">
                    <DownloadIcon size={13} /> Download
                  </button>
                )}
                {(entry.status === 'uploading' || entry.status === 'converting') && (
                  <LoaderIcon size={18} color="var(--brand-500)" />
                )}
                {entry.status === 'pending' && (
                  <button onClick={() => removeFile(entry.id)} className="p-2 rounded-lg hover:bg-[var(--bg-secondary)]" style={{ color: 'var(--text-muted)' }}>
                    <TrashIcon size={15} />
                  </button>
                )}
              </div>
            </div>
          ))}

          {files.some(f => f.status === 'pending') && (
            <button onClick={convertFiles} className="btn-gradient w-full !py-3.5 text-[15px]">
              Convert {files.filter(f => f.status === 'pending').length} file{files.filter(f => f.status === 'pending').length !== 1 ? 's' : ''}
            </button>
          )}
        </div>
      )}

      {/* ---- Usage counter ---- */}
      <p className="text-center text-[12px]" style={{ color: 'var(--text-muted)' }}>
        Free tier: {10 - getDailyUsage()} of 10 conversions remaining today •{' '}
        <span className="gradient-text font-semibold">Upgrade coming soon</span>
      </p>

      {/* ---- Upgrade modal ---- */}
      {showUpgradePrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowUpgradePrompt(false)}>
          <div className="section-card p-8 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <h3 className="text-[18px] font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Daily Limit Reached</h3>
            <p className="text-[13px] mb-5" style={{ color: 'var(--text-secondary)' }}>
              You've used all 10 free conversions today. Upgrade for unlimited.
            </p>
            <button className="btn-gradient !px-8" disabled style={{opacity:0.7}}>Coming Soon</button>
            <button onClick={() => setShowUpgradePrompt(false)} className="block mx-auto mt-3 text-[12px]" style={{ color: 'var(--text-muted)' }}>Maybe later</button>
          </div>
        </div>
      )}
    </div>
  );
}
