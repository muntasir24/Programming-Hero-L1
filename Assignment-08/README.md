<h1 align="center">HERO.IO - Productive App Platform</h1>

<p align="center">
  <strong>HERO.IO</strong> is a web application showcasing trending apps developed by HERO.IO. Users can browse, search, and install apps. This project uses <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>localStorage</strong> for managing installed apps.
</p>

<hr>

<h2>Features</h2>
<ul>
  <li>Browse trending apps</li>
  <li>Search apps in real-time</li>
  <li>Install apps and track installed apps</li>
  <li>Loading spinner while data or images load</li>
  <li>Responsive layout</li>
  <li>Smooth animations with <strong>Framer Motion</strong></li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>React.js</li>
  <li>Tailwind CSS</li>
  <li>Framer Motion</li>
  <li>React Hot Toast</li>
  <li>LocalStorage API</li>
  <li>Axios for data fetching</li>
</ul>

<h2>Installation</h2>
<pre>
<code>

</code>
</pre>

<h2>Folder Structure</h2>
<pre>
<code>
hero.io/
├─ public/
│  └─ assets/         # Images (hero, logo, appstore, playstore)
├─ src/
│  ├─ Components/     # Reusable components like HeroSection, ShowCard
│  ├─ Hooks/          # Custom hooks like useAppData
│  ├─ Pages/          # Home, Apps pages
│  ├─ Spinner/        # GlobalSpinner component
│  └─ Utils/          # LocalStorage functions
└─ package.json
</code>
</pre>

<h2>Example Code Snippets</h2>

<h3>Install Button Logic (LocalStorage)</h3>
<pre>
<code>
export const handleAdd = (myapp, setApps) => {
  let stored = JSON.parse(localStorage.getItem("installed")) || [];
  const exists = stored.some((it) => it.id === myapp.id);
  if (exists) {
    alert("Already installed");
    return;
  }
  const updated = [...stored, myapp];
  localStorage.setItem("installed", JSON.stringify(updated));
  setApps(updated);
};
</code>
</pre>

<h3>Custom Hook for App Data</h3>
<pre>
<code>
import { useState, useEffect } from "react";
import axios from "axios";

const useAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("/appdata.json")
      .then((res) => setAppData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { appData, loading };
};

export default useAppData;
</code>
</pre>
