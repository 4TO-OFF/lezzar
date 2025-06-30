const input = document.getElementById("input");
const terminal = document.getElementById("terminal");

const commands = {
  aide: `
    <div>📜 Liste complète des Commandes Slash :</div>
    <ul>
      <li><code>/config</code> ⚙️ Gérer les paramètres de mise en avant du serveur.</li>
      <li><code>/bump</code> 🚀 Lancer une mise en avant de ce serveur sur tous les serveurs partenaires.</li>
      <li><code>/premium</code> 👑 Gérer les serveurs premium (Réservé aux propriétaires du bot).</li>
      <li><code>/voter</code> 🗳️ Vote pour ce serveur.</li>
      <li><code>/info bot</code> ℹ️ Afficher les informations du bot.</li>
      <li><code>/info serveur</code> ℹ️ Afficher les informations du serveur.</li>
      <li><code>/info membre</code> ℹ️ Afficher les informations d'un membre.</li>
      <li><code>/aide</code> ❓ Afficher toutes les commandes slash du bot.</li>
      <li><code>/inviter</code> 🔗 Obtenir le lien pour inviter le bot sur votre serveur.</li>
      <li><code>/support</code> 🛠️ Obtenir le lien vers le serveur de support du bot (si configuré).</li>
      <li><code>/vote</code> 📢 Vote pour le bot sur les plateformes !</li>
      <li><code>/leaderboard</code> 🏆 Afficher le classement des serveurs par bump ou votes.</li>
      <li><code>/ping</code> 🏓 Affiche la latence du bot.</li>
      <li><code>/avatar</code> 😎 Affiche l'avatar d'un membre.</li>
    </ul>
  `,
  config: `
    <div>⚙️ <b>Configuration de la mise en avant</b></div>
    <div>Salon de bump : <i>Non configuré</i></div>
    <div>Description : serveur discord communautaire tranquille voc événement à venir possibilité de faire des partenariats pub autorisé</div>
    <div>Couleur : <code>#FFA500</code></div>
  `,
  bump: `
    <div>🚀 <b>Mise en Avant Terminée</b></div>
    <div>Votre publicité a été envoyée à 13 serveurs (72.2%)</div>
    <div>Vous contribuez à faire découvrir votre serveur à de nouveaux membres !</div>
    <div><a href="https://discord.com/oauth2/authorize?client_id=1372573820925509652&permissions=8&scope=bot" target="_blank">Ajoutez Moi</a> | <a href="https://discord.com/invite/5XghBdhxgE" target="_blank">Serveur Support</a></div>
  `,
  voter: `
    <div>🙏 Merci pour ton vote pour <b>Serveur d'exemple</b> ! +2 points ajoutés.</div>
  `,
  "info bot": `
    <div>ℹ️ <b>Informations sur Lezzar</b></div>
    <div>Développeur(s) : biston083, loupkia, alataq</div>
    <div>Date de création : 15/05/2025 13:58:20 UTC</div>
    <div>Serveurs : 24</div>
    <div>Latence (ping) : 96 ms</div>
  `,
  "info serveur": `
    <div>ℹ️ <b>Informations sur Serveur d'exemple</b></div>
    <div>ID du Serveur : 123456789012345678</div>
    <div>Statut Premium : Oui</div>
    <div>Propriétaire : @ExempleUser</div>
    <div>Membres : 42</div>
    <div>Boosts : 3</div>
    <div>Création : 01/01/2025 12:00:00 UTC</div>
  `,
  "info membre": `
    <div>ℹ️ <b>Informations sur User</b></div>
    <img src="images/userpp.png" alt="Avatar User pp" style="width:64px; height:64px; border-radius:50%; margin-bottom:8px;" />
    <div>ID Utilisateur : 987654321098765432</div>
    <div>Nom d'utilisateur : User#1234</div>
    <div>A rejoint Serveur d'exemple</div>
  `,
  support: `
    <div>🛠️ Besoin d'aide ou de support ?</div>
    <div>Rejoignez notre serveur de support pour obtenir de l'aide, poser des questions ou faire des suggestions !</div>
    <div><a href="https://discord.com/invite/5XghBdhxgE" target="_blank">Rejoindre le serveur de support</a></div>
  `,
  inviter: `
    <div>🔗 Invitez-moi sur votre serveur ici : <a href="https://discord.com/oauth2/authorize?client_id=1372573820925509652&permissions=8&scope=bot" target="_blank">Clicque ici</a></div>
  `,
  vote: `
    <div>📢 Vote pour nous !</div>
    <ul>
      <li>🔗 <a href="https://top.gg" target="_blank">Top.gg</a></li>
      <li>🔗 <a href="https://voidbots.net" target="_blank">VoidBots</a></li>
      <li>🔗 <a href="https://discords.com" target="_blank">Discords.com</a></li>
    </ul>
    <div>Voter aide le bot à être plus visible et soutient son développement 💖</div>
  `,
  leaderboard: `
    <div>🏆 <b>Classement des Serveurs</b></div>
    <div><b>Par bumps :</b></div>
    <ol>
      <li>Serveur du gars : 66 bumps</li>
      <li>Serveur d'exemple : 42 bumps</li>
      <li>Lezzar Family : 35 bumps</li>
      <li>2 + 2 = 5 : 30 bumps</li>
      <li>Arasaka vs millitech : 21 bumps</li>
      <li>Truc corp: 20 bumps</li>
    </ol>
    <div><b>Par votes :</b></div>
    <ol>
      <li>Serveur d'exemple : 6 votes (top 2)</li>
      <li>Lezzar Family : 5 votes</li>
      <li>Arasaka vs millitech : 3 votes</li>
      <li>Serveur d'un gars : 1 vote</li>
      <li>2 + 2 = 5: 1 vote</li>
    </ol>
  `,
  ping: `🏓 Pong ! Latence : 95 ms`,
  avatar: `
    <div>😎 Avatar de User#1234 :</div>
    <img src="images/userpp.png" alt="Avatar User" style="width:64px; height:64px; border-radius:50%; margin-top:8px;" />
  `
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    appendLine(`<span class="prompt">lezzar $</span> ${cmd}`);

    if (cmd.startsWith("/")) {
      const commandName = cmd.slice(1); 
      if (commands[commandName]) {
        appendLine(commands[commandName]);
      } else {
        appendLine(`Commande inconnue : <code>${cmd}</code>`);
      }
    } else if (cmd === "") {
      // rien
    } else {
      appendLine(`Commande inconnue : <code>${cmd}</code>`);
    }

    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
  }
});

function appendLine(content) {
  const div = document.createElement("div");
  div.className = "line";
  div.innerHTML = content;
  terminal.appendChild(div);
}
