import React, { useState, useRef, useEffect } from 'react';

// --- Inline Icon Components ---

const IconLoader2 = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const IconUpload = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

const IconLink = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconChevronLeft = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const IconBookOpen = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconX = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 18 18" />
  </svg>
);

const IconZoomIn = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
    <line x1="11" x2="11" y1="8" y2="14" />
    <line x1="8" x2="14" y1="11" y2="11" />
  </svg>
);

const IconZoomOut = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
    <line x1="8" x2="14" y1="11" y2="11" />
  </svg>
);

const IconDownload = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const IconMaximize = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" x2="14" y1="3" y2="10" />
    <line x1="3" x2="10" y1="21" y2="14" />
  </svg>
);

const IconMinimize = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

const IconLayout = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="3" x2="21" y1="9" y2="9" />
    <line x1="9" x2="9" y1="21" y2="9" />
  </svg>
);

const IconCode = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconCopy = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const IconCheck = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);


/**
 * Utility to load the PDF.js library dynamically from CDN
 */
const usePdfJs = () => {
  const [lib, setLib] = useState(null);

  useEffect(() => {
    if (window.pdfjsLib) {
      setLib(window.pdfjsLib);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      const pdfjs = window.pdfjsLib;
      pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      setLib(pdfjs);
    };
    document.body.appendChild(script);
  }, []);

  return lib;
};

/**
 * Individual PDF Page Renderer
 * Updated to support both width AND height constraints (contain mode)
 */
const PdfPageRenderer = ({ pdfDoc, pageNumber, scale = 1, width, height }) => {
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [rendering, setRendering] = useState(true);

  useEffect(() => {
    let mounted = true;

    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current) return;
      
      setRendering(true);

      if (renderTaskRef.current) {
        try {
          await renderTaskRef.current.cancel();
        } catch (e) { }
      }

      try {
        const page = await pdfDoc.getPage(pageNumber);
        if (!mounted) return;

        // Get default viewport at scale 1
        let viewport = page.getViewport({ scale: 1 });
        
        // Calculate scaling factor to fit strictly within container
        // We use Math.min to ensure it fits both width and height (contain)
        let scaleX = width ? width / viewport.width : 1;
        let scaleY = height ? height / viewport.height : 1;
        
        // If both are provided, pick the smaller scale to ensure no overflow
        let finalScale = (width && height) ? Math.min(scaleX, scaleY) : (width ? scaleX : 1);
        
        // Apply global zoom scale
        finalScale *= scale; 

        // Re-calculate viewport with final scale
        viewport = page.getViewport({ scale: finalScale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        await renderTask.promise;
        
        if (mounted) {
          setRendering(false);
          renderTaskRef.current = null;
        }
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') {
          console.error("Page render error:", err);
        }
        if (mounted) {
          setRendering(false);
        }
      }
    };

    renderPage();

    return () => {
      mounted = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [pdfDoc, pageNumber, scale, width, height]);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden group flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
      <div className={`absolute top-0 bottom-0 w-8 z-30 pointer-events-none bg-gradient-to-r from-black/20 to-transparent ${pageNumber % 2 === 0 ? 'right-0 bg-gradient-to-l' : 'left-0'}`} />
      
      {rendering && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <IconLoader2 className="animate-spin text-indigo-400" />
        </div>
      )}
      <canvas ref={canvasRef} className="shadow-sm max-w-full max-h-full object-contain" />
      <div className="absolute bottom-2 right-4 text-[10px] text-slate-400 font-mono z-30">
        {pageNumber}
      </div>
    </div>
  );
};

/**
 * Custom 3D Book Component
 */
const Book3D = ({ pdfDoc, numPages, containerWidth, scale = 1, format = 'portrait' }) => {
  const [currentPage, setCurrentPage] = useState(0); 
  const totalSheets = Math.ceil(numPages / 2) + 1; 

  // Touch handling state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goToNext = () => {
    if (currentPage < totalSheets - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSheetStyle = (index) => {
    const isFlipped = index < currentPage;
    let rotateY = isFlipped ? -180 : 0;
    let zIndex = isFlipped ? index : totalSheets - index;

    return {
      zIndex,
      transform: `rotateY(${rotateY}deg)`,
    };
  };

  // Adjust width calculation for mobile to prevent overflow
  const isMobile = window.innerWidth < 768;
  const maxWidth = isMobile ? containerWidth : 500;
  const pageWidth = Math.min(containerWidth / (isMobile ? 1 : 2), maxWidth); 
  
  // Calculate Height based on Selected Format
  let aspectRatio = 1.414; // Default Portrait
  if (format === 'square') aspectRatio = 1;
  if (format === 'landscape') aspectRatio = 0.707;
  
  const pageHeight = pageWidth * aspectRatio;

  return (
    <div 
      className="flex flex-col items-center justify-center h-full w-full touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div 
        className="relative perspective-container transition-transform duration-500"
        style={{ 
          width: isMobile ? pageWidth : pageWidth * 2, 
          height: pageHeight,
          perspective: '1500px',
          transform: `scale(${scale})` 
        }}
      >
        {!isMobile && (
          <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-gray-800 -translate-x-1/2 rounded-sm shadow-xl z-0" />
        )}

        {Array.from({ length: totalSheets }).map((_, i) => {
          const frontPageNum = i * 2;
          const backPageNum = i * 2 + 1;
          
          return (
            <div
              key={i}
              className={`absolute top-0 ${isMobile ? 'left-0' : 'left-1/2'} w-full h-full origin-left preserve-3d transition-transform duration-700 ease-in-out cursor-pointer shadow-2xl`}
              style={{
                ...getSheetStyle(i),
                width: pageWidth,
                height: pageHeight,
                transformOrigin: isMobile ? 'center left' : 'left center' 
              }}
              onClick={() => {
                if (i === currentPage) goToNext();
                if (i === currentPage - 1) goToPrev();
              }}
            >
              <div className="absolute inset-0 backface-hidden bg-white border-l border-gray-200 overflow-hidden">
                {frontPageNum === 0 ? (
                  <CoverPage title="PDF Document" subtitle="3D Viewer" />
                ) : (
                  frontPageNum <= numPages ? (
                    <PdfPageRenderer pdfDoc={pdfDoc} pageNumber={frontPageNum} width={pageWidth} height={pageHeight} />
                  ) : (
                    <div className="w-full h-full bg-white" />
                  )
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
              </div>

              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border-r border-gray-200 overflow-hidden">
                {backPageNum <= numPages ? (
                  <PdfPageRenderer pdfDoc={pdfDoc} pageNumber={backPageNum} width={pageWidth} height={pageHeight} />
                ) : (
                  <CoverPage title="The End" isBack />
                )}
                <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls - Optimized for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl z-50 transition-all active:scale-95">
        <button 
          onClick={goToPrev}
          disabled={currentPage === 0}
          className="p-3 rounded-full hover:bg-white/10 text-white disabled:opacity-30 transition-all active:scale-95 touch-manipulation"
          aria-label="Previous Page"
        >
          <IconChevronLeft size={24} />
        </button>
        
        <span className="text-xs md:text-sm font-medium text-slate-300 font-mono min-w-[80px] text-center">
          {currentPage + 1} / {totalSheets}
        </span>

        <button 
          onClick={goToNext}
          disabled={currentPage === totalSheets - 1}
          className="p-3 rounded-full hover:bg-white/10 text-white disabled:opacity-30 transition-all active:scale-95 touch-manipulation"
          aria-label="Next Page"
        >
          <IconChevronRight size={24} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-container {
          perspective: 1500px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .origin-left {
          transform-origin: left center;
        }
      `}} />
    </div>
  );
};

const CoverPage = ({ title, subtitle, isBack = false }) => (
  <div className="h-full w-full bg-[#1a1a1a] text-white p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black pointer-events-none" />
    <div className="z-10 border-4 border-indigo-500/30 p-4 md:p-8 w-full h-full flex flex-col items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm">
      <IconBookOpen size={48} className="text-indigo-400 mb-4 md:mb-6" />
      <h1 className="text-xl md:text-3xl font-bold text-center font-serif mb-2 tracking-wide text-indigo-50 line-clamp-3">{title}</h1>
      {subtitle && <p className="text-indigo-300 uppercase tracking-widest text-[10px] md:text-xs">{subtitle}</p>}
    </div>
    <div className={`absolute top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 to-transparent pointer-events-none ${isBack ? 'right-0' : 'left-0'}`} />
  </div>
);

/**
 * Embed Code Modal Component
 */
const EmbedModal = ({ isOpen, onClose, embedCode }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    // Fallback for iframe environments where Clipboard API is blocked
    try {
      const textArea = document.createElement("textarea");
      textArea.value = embedCode;
      
      // Ensure it's not visible but part of DOM
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
         console.error("Fallback: Oops, unable to copy");
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <IconCode className="text-indigo-400" />
            Embed HTML
          </h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white transition-colors">
            <IconX size={20} />
          </button>
        </div>
        
        <p className="text-slate-400 text-sm mb-4">
          Copy the code below and paste it into your website's HTML to display this flipbook.
        </p>
        
        <div className="relative">
          <textarea 
            readOnly 
            value={embedCode} 
            className="w-full h-32 bg-slate-950 border border-slate-700 rounded-xl p-4 text-xs font-mono text-indigo-100 focus:outline-none focus:border-indigo-500 resize-none"
          />
          <button 
            onClick={handleCopy}
            className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-all"
          >
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            {copied ? 'Copied' : 'Copy Code'}
          </button>
        </div>

        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 text-sm text-slate-300 hover:text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * Main Application
 */
export default function App() {
  const [file, setFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputUrl, setInputUrl] = useState('');
  const [viewMode, setViewMode] = useState('landing');
  const [containerWidth, setContainerWidth] = useState(800);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [bookFormat, setBookFormat] = useState('portrait'); 
  const [showEmbedModal, setShowEmbedModal] = useState(false);

  const containerRef = useRef(null);
  const pdfjsLib = usePdfJs();

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [viewMode]);

  // Handle URL Parameters for Deep Linking / Hosting
  useEffect(() => {
    if (pdfjsLib) {
      const params = new URLSearchParams(window.location.search);
      const pdfParam = params.get('pdf');
      if (pdfParam && pdfParam.length > 5) { // Simple validation to prevent bad requests
        setInputUrl(pdfParam);
        loadPdf(pdfParam);
      }
    }
  }, [pdfjsLib]);

  const loadPdf = async (urlOrData) => {
    if (!pdfjsLib) return;
    if (!urlOrData) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const loadingTask = pdfjsLib.getDocument(urlOrData);
      const doc = await loadingTask.promise;
      setPdfDoc(doc);
      setViewMode('reader');
      setScale(1); // Reset zoom
    } catch (err) {
      console.error("PDF Load Error:", err);
      // More specific error message
      if (err.name === 'InvalidPDFException') {
        setError("Invalid PDF file or corrupt data.");
      } else if (err.name === 'MissingPDFException') {
        setError("PDF file missing.");
      } else {
        setError("Failed to load PDF. Please check the URL or file.");
      }
    } finally {
      setLoading(false);
    }
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const typedarray = new Uint8Array(this.result);
        loadPdf(typedarray);
      };
      fileReader.readAsArrayBuffer(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (inputUrl) loadPdf(inputUrl);
  };

  const reset = () => {
    setFile(null);
    setPdfDoc(null);
    setViewMode('landing');
  };

  // --- Toolbar Actions ---

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));

  const handleDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (inputUrl) {
      window.open(inputUrl, '_blank');
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch (err) {
      console.warn("Fullscreen request denied:", err);
      setIsFullscreen(!!document.fullscreenElement);
    }
  };

  // Generate Embed Code
  const getEmbedCode = () => {
    // We strip existing params and add the 'pdf' param if it's a URL
    const baseUrl = window.location.href.split('?')[0];
    
    if (inputUrl) {
      // If it's a URL, we can generate a deep link
      const encodedUrl = encodeURIComponent(inputUrl);
      return `<iframe src="${baseUrl}?pdf=${encodedUrl}" width="100%" height="600" style="border:none;" allowfullscreen></iframe>`;
    } else {
      // If it's a file, we can't link to the user's local file, so we provide a template
      return `<!-- IMPORTANT: You must host the PDF file online first -->\n<iframe src="${baseUrl}?pdf=YOUR_PDF_URL_HERE" width="100%" height="600" style="border:none;" allowfullscreen></iframe>`;
    }
  };

  // --------------------------------------------------------------------------
  // Landing View
  // --------------------------------------------------------------------------
  if (viewMode === 'landing') {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white font-sans relative overflow-hidden flex flex-col items-center justify-center p-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center space-y-8 md:space-y-12">
          
          <div className="space-y-4 md:space-y-6">
             <div className="inline-flex items-center justify-center p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-4">
              <IconBookOpen className="text-indigo-400 mr-2 md:mr-3" size={28} />
              <span className="text-2xl md:text-3xl font-bold tracking-tight">Flip<span className="text-indigo-400">Master</span> 3D</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tight leading-tight">
              Reimagine Your Documents
            </h1>
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
              Transform static PDFs into stunning, interactive 3D flipbooks. 
              Drag, drop, and experience the physics of reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl mx-auto">
            {/* Upload Card */}
            <div className="relative group bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-indigo-500/50 rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-300 backdrop-blur-md flex flex-col items-center justify-center text-center cursor-pointer shadow-xl overflow-hidden active:scale-95">
              <input 
                type="file" 
                onChange={onFileChange} 
                accept=".pdf" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                disabled={!pdfjsLib}
              />
              <div className="mb-4 md:mb-6 p-4 md:p-5 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                {loading ? <IconLoader2 className="animate-spin" size={32}/> : <IconUpload size={32} />}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Upload PDF</h3>
              <p className="text-slate-400 text-xs md:text-sm">Drag & drop or browse</p>
            </div>

            {/* URL Card */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 backdrop-blur-md flex flex-col justify-center shadow-xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6 text-indigo-400">
                <IconLink size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-white">From URL</h3>
              </div>
              <form onSubmit={handleUrlSubmit} className="relative w-full">
                <input 
                  type="url" 
                  placeholder="https://example.com/doc.pdf"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 pr-12 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 text-sm md:text-base"
                  disabled={!pdfjsLib}
                />
                <button 
                  type="submit"
                  disabled={!inputUrl || !pdfjsLib}
                  className="absolute right-2 top-2 bottom-2 p-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors"
                >
                  <IconChevronRight size={20} />
                </button>
              </form>
              <p className="mt-4 text-[10px] md:text-xs text-slate-500 text-center">
                Supports CORS-enabled URLs only.
              </p>
            </div>
          </div>
          
          {error && (
             <div className="inline-flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-lg border border-red-400/20 text-sm">
               <IconX size={16} /> {error}
             </div>
          )}

          {!pdfjsLib && (
             <p className="text-slate-500 text-sm animate-pulse">Initializing 3D Engine...</p>
          )}

        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // Reader View
  // --------------------------------------------------------------------------
  return (
    <div className="h-screen w-screen bg-[#121212] flex flex-col overflow-hidden">
      
      {/* Navbar */}
      <div className="h-14 md:h-16 border-b border-white/10 bg-[#121212] flex items-center justify-between px-3 md:px-6 z-50 shadow-lg shrink-0 gap-2">
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden shrink">
          <button 
            onClick={reset} 
            className="flex items-center gap-1 md:gap-2 text-slate-400 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
          >
            <IconChevronLeft size={18} />
            <span className="font-medium text-xs md:text-sm hidden sm:inline">Exit</span>
          </button>
          <div className="h-4 md:h-6 w-px bg-white/10 hidden sm:block" />
          <h2 className="text-slate-200 font-medium truncate text-xs md:text-base max-w-[100px] md:max-w-xs">
            {file?.name || 'External Document'}
          </h2>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar">
          
          {/* Format Selector */}
          <div className="relative group flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5 md:p-1 mr-1 md:mr-2">
             <IconLayout size={16} className="ml-2 text-slate-400 hidden sm:block"/>
             <select 
               value={bookFormat} 
               onChange={(e) => setBookFormat(e.target.value)}
               className="bg-transparent text-slate-300 text-xs md:text-sm font-medium py-1 px-1 md:px-2 rounded-md focus:outline-none focus:bg-white/10 cursor-pointer appearance-none sm:appearance-auto"
               title="Change Book Size"
             >
               <option value="portrait" className="bg-[#1a1a1a]">Portrait</option>
               <option value="square" className="bg-[#1a1a1a]">Square</option>
               <option value="landscape" className="bg-[#1a1a1a]">Landscape</option>
             </select>
          </div>

          <div className="flex items-center bg-white/5 rounded-lg p-0.5 md:p-1 border border-white/10">
            <button onClick={handleZoomOut} className="p-1.5 md:p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="Zoom Out">
              <IconZoomOut size={16} />
            </button>
            <span className="hidden lg:inline-block w-12 text-center text-xs font-mono text-slate-300 select-none">
              {Math.round(scale * 100)}%
            </span>
            <button onClick={handleZoomIn} className="p-1.5 md:p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="Zoom In">
              <IconZoomIn size={16} />
            </button>
          </div>

          <div className="h-4 md:h-6 w-px bg-white/10 mx-1" />

          {/* New Embed Button */}
          <button 
            onClick={() => setShowEmbedModal(true)}
            className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors border border-transparent hover:border-indigo-500/20" 
            title="Get HTML / Embed Code"
          >
            <IconCode size={18} />
          </button>

          <button onClick={handleDownload} className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors border border-transparent hover:border-indigo-500/20" title="Download PDF">
            <IconDownload size={18} />
          </button>
          
          <button onClick={toggleFullscreen} className="hidden sm:block p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Toggle Fullscreen">
             {isFullscreen ? <IconMinimize size={18} /> : <IconMaximize size={18} />}
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center overflow-hidden touch-none">
        {/* Background Ambient Light */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[80%] h-[80%] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="w-full h-full p-4 md:p-8 flex items-center justify-center" ref={containerRef}>
          {pdfDoc && containerWidth > 0 && (
            <Book3D 
              pdfDoc={pdfDoc} 
              numPages={pdfDoc.numPages} 
              containerWidth={containerWidth - (window.innerWidth < 768 ? 20 : 60)} 
              scale={scale}
              format={bookFormat}
            />
          )}
        </div>
      </div>

      {/* Embed Modal */}
      <EmbedModal 
        isOpen={showEmbedModal} 
        onClose={() => setShowEmbedModal(false)} 
        embedCode={getEmbedCode()}
      />

    </div>
  );
}
