"use client";

import { useState, useRef, useCallback } from "react";
import AdSlot from "@/components/AdSlot";

type BgColor = { name: string; hex: string; label: string };
type PhotoSize = { name: string; width: number; height: number; label: string };

const BG_COLORS: BgColor[] = [
  { name: "red", hex: "#ED1C24", label: "Red" },
  { name: "blue", hex: "#2979FF", label: "Blue" },
  { name: "white", hex: "#FFFFFF", label: "White" },
  { name: "gray", hex: "#D0D0D0", label: "Gray" },
];

const SIZES: PhotoSize[] = [
  { name: "1inch", width: 295, height: 413, label: "1-inch (25×35mm)" },
  { name: "2inch", width: 413, height: 579, label: "2-inch (35×49mm)" },
  { name: "passport", width: 390, height: 470, label: "Passport (33×48mm)" },
];

export default function AIPhotoTool() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [bgColor, setBgColor] = useState<BgColor>(BG_COLORS[0]);
  const [photoSize, setPhotoSize] = useState<PhotoSize>(SIZES[0]);
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState("");
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      setImage(img);
      setResultUrl(null);
      setStatus("");
    };
    img.src = URL.createObjectURL(file);
  }, []);

  const processPhoto = useCallback(async () => {
    if (!image) return;
    setProcessing(true);
    setStatus("Removing background...");
    setResultUrl(null);

    try {
      // Dynamic import for background removal (lazy loaded)
      const { removeBackground } = await import("@imgly/background-removal");
      const blob = await removeBackground(image.src, {
        progress: (key, current, total) => {
          const pct = total > 0 ? Math.round((current / total) * 100) : 0;
          setStatus(`Removing background... ${pct}%`);
        },
      });
      const bgUrl = URL.createObjectURL(blob);
      const bgImg = new Image();
      bgImg.onload = () => {
        renderFinal(bgImg);
      };
      bgImg.src = bgUrl;
    } catch (err: any) {
      setStatus(`Error: ${err.message || "Processing failed"}`);
      setProcessing(false);
    }
  }, [image]);

  const renderFinal = useCallback(
    (fgImg: HTMLImageElement) => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")!;

      const targetW = photoSize.width;
      const targetH = photoSize.height;
      canvas.width = targetW;
      canvas.height = targetH;

      // Fill background color
      ctx.fillStyle = bgColor.hex;
      ctx.fillRect(0, 0, targetW, targetH);

      // Draw the foreground (person) centered, fitting the canvas
      const scale = Math.max(targetW / fgImg.width, targetH / fgImg.height);
      const drawW = fgImg.width * scale;
      const drawH = fgImg.height * scale;
      const dx = (targetW - drawW) / 2;
      const dy = (targetH - drawH) / 2;
      ctx.drawImage(fgImg, dx, dy, drawW, drawH);

      setResultUrl(canvas.toDataURL("image/png"));
      setStatus("Done! Ready to download.");
      setProcessing(false);
    },
    [bgColor, photoSize]
  );

  const downloadPhoto = useCallback(() => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = `id-photo-${photoSize.name}-${bgColor.name}.png`;
    a.click();
  }, [resultUrl, photoSize, bgColor]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          AI ID Photo Maker
        </h1>
        <p className="text-[#94a3b8]">
          Remove background and create standard ID photos — all in your browser, nothing uploaded to any server.
        </p>
      </div>

      <AdSlot className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Controls */}
        <div className="space-y-6">
          {/* Upload */}
          <div
            className="border-2 border-dashed border-[#334155] rounded-xl p-8 text-center cursor-pointer hover:border-blue-500/40 transition-colors"
            onClick={() => inputRef.current?.click()}
          >
            {image ? (
              <img
                src={image.src}
                alt="Uploaded"
                className="max-h-40 mx-auto rounded-lg"
              />
            ) : (
              <div className="text-[#94a3b8]">
                <div className="text-4xl mb-2">📷</div>
                <p>Click to upload a photo</p>
                <p className="text-xs mt-1">JPG or PNG, any size</p>
              </div>
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </div>

          {/* Background Color */}
          <div>
            <label className="block text-sm text-[#94a3b8] mb-2">Background Color</label>
            <div className="flex gap-3">
              {BG_COLORS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setBgColor(c)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    bgColor.name === c.name
                      ? "border-blue-400 scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm text-[#94a3b8] mb-2">Photo Size</label>
            <select
              value={photoSize.name}
              onChange={(e) => {
                const s = SIZES.find((s) => s.name === e.target.value)!;
                setPhotoSize(s);
              }}
              className="w-full bg-[#1e293b] border border-[#334155] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
            >
              {SIZES.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Process Button */}
          <button
            onClick={processPhoto}
            disabled={!image || processing}
            className="w-full py-3 rounded-xl font-semibold text-sm transition-all bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {processing ? status || "Processing..." : "✨ Remove Background & Generate"}
          </button>

          {status && !processing && (
            <p className="text-sm text-[#94a3b8] text-center">{status}</p>
          )}
        </div>

        {/* Right: Preview */}
        <div>
          <label className="block text-sm text-[#94a3b8] mb-2">Preview</label>
          <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-4 flex items-center justify-center min-h-[320px]">
            {resultUrl ? (
              <img
                src={resultUrl}
                alt="ID Photo Preview"
                className="max-w-full max-h-[400px] rounded-lg shadow-lg"
              />
            ) : (
              <div className="text-[#475569] text-sm">
                <div className="text-5xl mb-3 text-center">🖼️</div>
                <p>Upload a photo and click generate</p>
              </div>
            )}
          </div>

          {/* Download */}
          {resultUrl && (
            <button
              onClick={downloadPhoto}
              className="w-full mt-4 py-3 rounded-xl font-semibold text-sm transition-all bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:opacity-90"
            >
              ⬇️ Download ID Photo (PNG)
            </button>
          )}
        </div>
      </div>

      {/* Hidden canvas for rendering */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Info */}
      <div className="mt-10 p-4 bg-[#1e293b] rounded-xl border border-[#334155]">
        <h3 className="text-white font-semibold text-sm mb-2">🔒 Privacy First</h3>
        <p className="text-[#94a3b8] text-sm leading-relaxed">
          Your photo is processed entirely in your browser using WebAssembly. 
          <strong className="text-white"> Nothing is uploaded to any server.</strong> 
          Background removal runs locally via AI — no API calls, no data transmission, no storage.
        </p>
        <p className="text-[#94a3b8] text-xs mt-2">
          Powered by @imgly/background-removal (ONNX Runtime Web).
        </p>
      </div>

      <AdSlot className="mt-8" />
    </div>
  );
}
