'use client';

export default function Home() {
  const handleSubmit = async () => {
    console.log("SOHAM activated!");
    try {
      await fetch("/api/log-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "activate" }),
      });
    } catch (err) {
      console.error("Failed to log response:", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <img
        src="/logo-copy.png"
        alt="Checkered Labs Logo"
        style={{
          width: "120px",
          height: "auto",
          marginBottom: "32px",
          zIndex: 1,
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
        }}
      />

      <h1
        style={{
          color: "#FFF",
          fontSize: 48,
          fontWeight: 700,
          marginBottom: 24,
          zIndex: 1,
          textShadow: "0 0 2px #FFF, 0 0 8px rgba(255,255,255,0.3)",
          animation: "glow 2s ease-in-out infinite alternate",
        }}
      >
        Checkered Labs
      </h1>

      <style>
        {`

          @keyframes glow {
            from { text-shadow: 0 0 2px #FFF, 0 0 8px rgba(255,255,255,0.3); }
            to { text-shadow: 0 0 4px #FFF, 0 0 12px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.2); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}
      </style>

      <div
        style={{
          color: "#FFF",
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 32,
          zIndex: 1,
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        Building the future of tech for near Earth orbit in Waterloo!
      </div>

      <button
        onClick={handleSubmit}
        style={{
          background: "#000",
          color: "#FFF",
          border: "2px solid #FFF",
          borderRadius: 0,
          padding: "16px 48px",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 2,
          cursor: "pointer",
          boxShadow: "0 0 5px rgba(255,255,255,0.3)",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#FFF";
          e.currentTarget.style.color = "#000";
          e.currentTarget.style.boxShadow = "0 0 15px rgba(255,255,255,0.7)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#000";
          e.currentTarget.style.color = "#FFF";
          e.currentTarget.style.boxShadow = "0 0 5px rgba(255,255,255,0.3)";
          e.currentTarget.style.transform = "translateY(0px)";
        }}
      >
        Scroll down to learn more. 
      </button>

      {/* Corner elements */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          width: 40,
          height: 40,
          border: "2px solid #FFF",
          borderRight: "none",
          borderBottom: "none",
          opacity: 0.5,
          animation: "pulse 3s infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 40,
          height: 40,
          border: "2px solid #FFF",
          borderLeft: "none",
          borderBottom: "none",
          opacity: 0.5,
          animation: "pulse 3s infinite 1.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: 40,
          height: 40,
          border: "2px solid #FFF",
          borderRight: "none",
          borderTop: "none",
          opacity: 0.5,
          animation: "pulse 3s infinite 0.75s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 40,
          height: 40,
          border: "2px solid #FFF",
          borderLeft: "none",
          borderTop: "none",
          opacity: 0.5,
          animation: "pulse 3s infinite 2.25s",
        }}
      />
    </div>
  );
}