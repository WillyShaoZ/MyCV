import { useState } from "react";
import { uploadImage } from "../lib/supabase";

function ImageField({ value, onChange, folder }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const url = await uploadImage(file, folder);
      onChange(url);
    } catch (err) {
      setError(err.message || "Upload failed");
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  };

  return (
    <div className="ad-image">
      {value ? (
        <img className="ad-image__preview" src={value} alt="" />
      ) : (
        <div className="ad-image__preview ad-image__preview--empty">No image</div>
      )}
      <div className="ad-image__controls">
        <label className="ad-btn ad-btn--ghost">
          {busy ? "Uploading…" : "Upload image"}
          <input type="file" accept="image/*" onChange={handleFile} hidden disabled={busy} />
        </label>
        {value ? (
          <button type="button" className="ad-btn ad-btn--ghost" onClick={() => onChange("")}>
            Remove
          </button>
        ) : null}
      </div>
      <input
        className="ad-input"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="…or paste an image URL"
      />
      {error ? <p className="ad-error">{error}</p> : null}
    </div>
  );
}

export default function Field({ field, value, onChange, folder }) {
  const { key, label, type, hint, rows } = field;

  return (
    <label className="ad-field">
      <span className="ad-label">{label}</span>

      {type === "textarea" ? (
        <textarea
          className="ad-input"
          rows={rows || 4}
          value={value || ""}
          onChange={(e) => onChange(key, e.target.value)}
        />
      ) : type === "list" ? (
        <textarea
          className="ad-input"
          rows={rows || 6}
          value={(value || []).join("\n")}
          onChange={(e) =>
            onChange(
              key,
              e.target.value.split("\n").map((s) => s.trim()).filter(Boolean)
            )
          }
        />
      ) : type === "image" ? (
        <ImageField
          value={value}
          folder={folder}
          onChange={(url) => onChange(key, url)}
        />
      ) : type === "number" ? (
        <input
          className="ad-input"
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(key, Number(e.target.value))}
        />
      ) : (
        <input
          className="ad-input"
          value={value || ""}
          onChange={(e) => onChange(key, e.target.value)}
        />
      )}

      {hint ? <span className="ad-hint">{hint}</span> : null}
    </label>
  );
}
