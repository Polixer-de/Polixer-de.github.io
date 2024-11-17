// Hamburger-Menü umschalten
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }
  
  // Dynamisch laden der Abschnitte
  function loadSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none'; // Alle Abschnitte ausblenden
    });
  
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block'; // Den gewünschten Abschnitt anzeigen
    }
  }
  
  // Funktion zum Laden von Wiki-Inhalten
  function loadWikiContent(contentType) {
    const wikiContentDiv = document.getElementById('wiki-content');
  
    // Sicherstellen, dass der Inhalt nicht leer bleibt
    if (!wikiContentDiv) {
      console.error('Wiki-Inhalt div nicht gefunden!');
      return;
    }
  
    if (contentType === 'bewerbung') {
      wikiContentDiv.innerHTML = `
        <h3>Bewerbung</h3>
        <p>Wenn du Teil des Polixer-Teams werden möchtest, kannst du dich über unser Bewerbungsformular bewerben. Die Bewerbung ist einfach: Fülle das Formular aus und wir werden uns bei dir melden.</p>
      `;
    } else if (contentType === 'systeme') {
      wikiContentDiv.innerHTML = `
        <h3>Systeme</h3>
        <button onclick="loadWikiSystem('geldsystem')">Geldsystem</button>
        <button onclick="loadWikiSystem('perksystem')">Perksystem</button>
        <div id="system-content">Bitte wähle ein System aus.</div>
      `;
    }
  }
  
  // Funktion zum Laden von System-Inhalten
  function loadWikiSystem(systemType) {
    const systemContentDiv = document.getElementById('system-content');
    if (systemType === 'geldsystem') {
      systemContentDiv.innerHTML = `
        <h4>Geldsystem</h4>
        <p>Das Geldsystem auf Polixer.de ermöglicht es dir, durch das Handeln und das Abschließen von Jobs Geld zu verdienen. Du kannst dieses Geld verwenden, um coole Items und Perks zu kaufen.</p>
        <p>Verfügbare Befehle:</p>
        <ul>
          <li>/diamonds - Zeigt deinen aktuellen Kontostand.</li>
          <li>/pay [Spielername] [Betrag] - Überweise Geld an einen anderen Spieler.</li>
        </ul>
      `;
    } else if (systemType === 'perksystem') {
      systemContentDiv.innerHTML = `
        <h4>Perksystem</h4>
        <p>Das Perksystem auf Polixer.de ermöglicht es dir, durch spezielle Käufe Perks freizuschalten, die dir Vorteile verschaffen, wie zum Beispiel schnelleres Bauen oder extra Inventarplätze.</p>
        <p>Verfügbare Befehle:</p>
        <ul>
          <li>/perk - Sendet dich zum Perk Menü.</li>
        </ul>
      `;
    }
  }
  
  // Funktion zum Laden der Social Media Infos
  function loadSocialsContent() {
    const socialsContentDiv = document.getElementById('socials-content');
    socialsContentDiv.innerHTML = `
      <h3>Folge uns auf Social Media</h3>
      <p>Bleibe auf dem neuesten Stand, indem du uns auf unseren Social-Media-Kanälen folgst:</p>
      <ul>
        <li><a href="https://twitter.com/Polixer" target="_blank">Twitter</a></li>
        <li><a href="https://discord.gg/polixer" target="_blank">Discord</a></li>
        <li><a href="https://youtube.com/c/Polixer" target="_blank">YouTube</a></li>
      </ul>
    `;
  }
  
  // Funktion zum Laden der Team Infos
  function loadTeamContent() {
    const teamContentDiv = document.getElementById('team-content');
    teamContentDiv.innerHTML = `
      <h3>Unser Team</h3>
      <p>Hier kannst du mehr über das Polixer-Team erfahren. Wir sind ein engagiertes Team von Minecraft-Admins, Entwicklern und Moderatoren, die dafür sorgen, dass der Server reibungslos läuft.</p>
      <p>Unsere Teammitglieder:</p>
      <ul>
        <li>ShadwGHG - Owner</li>
        <li>DiamondKingHD - Owner</li>
        <li>OrangeSkink - Moderator</li>
        <li>🎮𝕃𝕒𝕞𝕚𝟛𝟠𝟟𝟛🎮 - Content</li>
        <li>🎮𝕋𝕠𝕣𝕟𝕒𝕕𝕠🎮 - Content</li>
      </ul>
    `;
  }
  
  // Funktion zum Laden des Impressums
  function loadImpressumContent() {
    const impressumContentDiv = document.getElementById('impressum-content');
    impressumContentDiv.innerHTML = `
      <p><strong>Angaben gemäß dem Österreichischen Gesetzt:</strong></p>
      <p>
        Polixer.de<br>
        Hollunderweg 7<br>
        4631 Krenglbach<br>
        Österreich
      </p>
      
      <p><strong>Vertreten durch:</strong><br>
        Philipp Litwin<br>
        Hollunderweg 7, 4631 Krenglbach
      </p>
  
      <p><strong>Bildrechte:</strong><br>
        Alle Bilder und Grafiken auf dieser Seite unterliegen den jeweiligen Urheberrechten. Die Verwendung ohne Genehmigung des Rechteinhabers ist nicht gestattet.
      </p>
    `;
  }
  
  // Standardmäßig den "Über uns" Abschnitt anzeigen
  document.addEventListener('DOMContentLoaded', () => {
    // Automatisch den "Über uns", "Wiki", "Team", "Socials" und "Impressum" Abschnitt laden
    loadSection('about'); 
    loadSection('wiki'); // Wenn der "Wiki" Bereich angezeigt wird
    loadWikiContent('systeme'); // Beispielinhalt für Systeme laden
    loadSection('socials');
    loadSection('impressum');
  
    loadTeamContent(); // Teaminhalt automatisch laden
    loadSocialsContent(); // Socials Inhalt automatisch laden
    loadImpressumContent(); // Impressum automatisch laden
  });
  