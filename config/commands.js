const whoisDerek = "Derek Deming is a Software/ML Engineer passionate about building innovative solutions at the intersection of AI, interpretability, and full-stack development. With experience at companies like Microsoft Security Research, Coca Cola , and various research positions, Derek specializes in machine learning systems, inference optimization, interpretability, and scalable data solutions. Currently, he is at Microsoft Security Research leading agentic security research and evals. He combines academic research rigor with industry scale engineering experience. Try %skills%, %experience%, or %projects% to learn more.";
const timeUnit = 1000; // useful for development, set to 10 to run faster, set to 1000 for production
let killed = false;

const commands = {
  help: function() {
    const maxCmdLength = Math.max(...Object.keys(help).map(x => x.length));
    Object.entries(help).forEach(function(kv) {
      const cmd = kv[0];
      const desc = kv[1];
      if (term.cols >= 80) {
        const rightPad = maxCmdLength - cmd.length + 2;
        const sep = " ".repeat(rightPad);
        term.stylePrint(`${cmd}${sep}${desc}`);
      } else {
        if (cmd != 'help') { // skip second leading newline
          term.writeln("");
        }
        term.stylePrint(cmd);
        term.stylePrint(desc);
      }
    })
  },

  whois: function(args) {
    const name = args[0];
    const people = Object.keys(team);

    if (!name) {
      term.stylePrint("%whois%: Learn about the firm, or a partner - usage:\r\n");
      term.stylePrint("%whois% root");
      for (p of people) {
        term.stylePrint(`%whois% ${p}`);
      }
    } else if (name == "derek" || name == "root") {
      const description = whoisDerek;
      term.stylePrint(description);
    } else if (Object.keys(team).includes(name)) {
      const person = team[name];
      term.printArt(name);
      term.stylePrint(`\r\n${person["name"]}, ${person["title"]} - ${name}@root.vc`);
      term.stylePrint(`${person["linkedin"]}\r\n`);
      term.stylePrint(person["description"]);
    } else {
      term.stylePrint(`User ${name || ''} not found. Try:\r\n`);
      term.stylePrint("%whois% root");
      for (p of people) {
        term.stylePrint(`%whois% ${p}`);
      }
    }
  },

  tldr: function(args) {
    const name = (args[0] || "");
    if (!name) {
      const companies = Object.keys(portfolio);
      term.stylePrint("%tldr%: Learn about a portfolio company - usage:\r\n");
      for (c of companies.sort()) {
        const data = portfolio[c];
        const tabs = c.length > 10 ? "\t" : "\t\t";
        const sep = term.cols >= 76 ? tabs : "\r\n";
        term.stylePrint(`%tldr% ${c}${sep}${data["url"]}`);
        if (term.cols < 76 && c != companies[companies.length - 1]) {
          term.writeln("");
        }
      }
    } else if (!portfolio[name]) {
      term.stylePrint(`Portfolio company ${name} not found. Should we talk to them? Email us: hello@root.vc`);
    } else {
      const company = portfolio[name];
      term.cols >= 60 ? term.printArt(name) : term.writeln("");
      term.stylePrint(company["name"]);
      term.stylePrint(company["url"]);
      if (company["memo"]) {
        term.stylePrint(`Investment Memo: ${company["memo"]}`);
      }
      term.stylePrint("");
      term.stylePrint(company["description"]);
      if (company["demo"]) {
        term.stylePrint(`Try it with command: %${name}%`);
      }
    }
  },

  git: function() {
    term.displayURL("https://github.com/derekdeming/cli-website");
  },

  agm: function() {
    term.openURL("http://annualmeeting.root.vc");
  },

  test: function() {
    term.openURL("https://i.imgur.com/Q2Unw.gif");
  },

  email: function() {
    term.stylePrint("derekdeming17@gmail.com");
  },

  github: function() {
    term.displayURL("https://github.com/derekdeming");
  },

  linkedin: function() {
    term.displayURL("https://linkedin.com/in/derekdeming");
  },

  x: function() {
    term.displayURL("https://x.com/ddeming_");
  },

  other: function() {
    term.stylePrint("Yeah, I didn't literally mean %other%. I mean try some Linux commands");
  },

  echo: function(args) {
    const message = args.join(" ");
    term.stylePrint(message);
  },

  say: function(args) {
    const message = args.join(" ");
    term.stylePrint(`(Robot voice): ${message}`);
  },

  pwd: function() {
    term.stylePrint("/" + term.cwd.replaceAll("~", `home/${term.user}`));
  },

  ls: function() {
    term.stylePrint(_filesHere().join("   "));
  },

  // I am so, so sorry for this code.
  cd: function(args) {
    let dir = args[0] || "~";
    if (dir != "/") {
      // strip trailing slash
      dir = dir.replace(/\/$/, "");
    }

    switch (dir) {
      case "~":
        term.cwd = "~";
        break;
      case "..":
        if (term.cwd == "~") {
          term.command("cd /home");
        } else if (["home", "bin"].includes(term.cwd)) {
          term.command("cd /");
        }
        break;
      case "../..":
      case "../../..":
      case "../../../..":
      case "/":
        term.cwd = "/";
        break;
      case "home":
        if (term.cwd == "/") {
          term.command("cd /home");
        } else {
          term.stylePrint(`You do not have permission to access this directory`);
        }
        break;
      case "/home":
        term.cwd = "home";
        break;
      case "guest":
      case "root":
        if (term.cwd == "home") {
          if (term.user == dir) {
            term.command("cd ~");
          } else {
            term.stylePrint(`You do not have permission to access this directory`);
          }
        } else {
          term.stylePrint(`No such directory: ${dir}`);
        }
        break;
      case "../home/avidan":
      case "../home/kane":
      case "../home/chrissy":
      case "../home/lee":
      case "../home/zodi":
      case "../home/ben":
      case "../home/laelah":
        if (term.cwd == "~" || term.cwd == "bin") {
          term.command(`cd ${dir.split("/")[2]}`);
        } else {
          term.stylePrint(`No such directory: ${dir}`);
        }
        break;
      case "/home/avidan":
      case "/home/kane":
      case "/home/chrissy":
      case "/home/lee":
      case "/home/zodi":
      case "/home/ben":
      case "/home/laelah":
      case "avidan":
      case "kane":
      case "chrissy":
      case "lee":
      case "zodi":
      case "ben":
      case "laelah":
        term.stylePrint(`You do not have permission to access this directory`);
        break;
      case "/bin":
        term.cwd = "bin";
        break;
      case "bin":
        if (term.cwd == "/") {
          term.cwd = "bin";
        } else {
          term.stylePrint(`No such directory: ${dir}`);
        }
        break;
      case ".":
        break;
      default:
        term.stylePrint(`No such directory: ${dir}`);
        break;
    }
  },

  zsh: function() {
    term.init(term.user);
  },

  cat: function(args) {
    const filename = args[0];

    if (_filesHere().includes(filename)) {
      term.writeln(getFileContents(filename));
    } else {
      term.stylePrint(`No such file: ${filename}`);
    }
    if (filename == "id_rsa") {
      term.openURL("https://i.imgur.com/Q2Unw.gif");
    }
  },

  grep: function(args) {
    const q = args[0];
    const filename = args[1];

    if (filename == "id_rsa") {
      term.openURL("https://i.imgur.com/Q2Unw.gif");
    }

    if (!q || !filename) {
      term.stylePrint("usage: %grep% [pattern] [filename]");
      return;
    }

    if (_filesHere().includes(filename)) {
      var file = getFileContents(filename);
      const matches = file.matchAll(q);
      for (match of matches) {
        file = file.replaceAll(match[0], colorText(match[0], "files"));
      }
      term.writeln(file);
    } else {
      term.stylePrint(`No such file or directory: ${filename}`);
    }
  },

  finger: function(args) {
    const user = args[0];

    switch (user) {
      case 'guest':
        term.stylePrint("Login: guest            Name: Guest");
        term.stylePrint("Directory: /home/guest  Shell: /bin/zsh");
        break;
      case 'root':
        term.stylePrint("Login: root             Name: That's Us!");
        term.stylePrint("Directory: /home/root   Shell: /bin/zsh");
        break;
      case 'avidan':
      case 'kane':
      case 'chrissy':
      case 'lee':
      case 'zodi':
      case 'ben':
      case 'laelah':
        term.stylePrint(`Login: ${user}   Name: ${team[user]["name"]}`);
        term.stylePrint(`Directory: /home/${user}   Shell: /bin/zsh`);
        break;
      default:
        term.stylePrint(user ? `%finger%: ${user}: no such user` : "usage: %finger% [user]");
        break;
    }
  },

  groups: function(args) {
    const user = args[0];

    switch (user) {
      case 'guest':
        term.stylePrint("guest lps founders engineers investors");
        break;
      case 'root':
        term.stylePrint("wheel investors engineers deep tech firms");
        break;
      case 'avidan':
        term.stylePrint("wheel investors engineers managingpartner handypersons tinkers agtech foodtech foodies coffeesnobs");
        break;
      case 'kane':
        term.stylePrint("wheel investors engineers partners tinkerers cad motorcyclists gearheads machinepix sportshooters gamers");
        break;
      case 'chrissy':
        term.stylePrint("wheel investors engineers partners electrical manufacturing ecad wearables healthtech gearheads automotive sportshooters");
        break;
      case 'lee':
        term.stylePrint("wheel investors engineers partners software devtools data ai+ml gamers winesnobs");
        break;
      case 'zodi':
        term.stylePrint("wheel investors engineers investors ai+ml simulation terraforming maine");
        break;
      case 'ben':
        term.stylePrint("wheel operations photography ironman racecars canyoneering");
        break;
      case 'laelah':
        term.stylePrint("wheel admin operations miracleworkers gamers");
        break;
      default:
        term.stylePrint(user ? `%groups%: ${user}: no such user` : "usage: %groups% [user]");
        break;
    }
  },

  gzip: function() {
    term.stylePrint("What are you going to do with a zip file on a fake terminal, seriously?");
  },

  free: function() {
    term.stylePrint("Honestly, our memory isn't what it used to be.");
  },

  tail: function(args) {
    term.command(`cat ${args.join(" ")}`);
  },

  less: function(args) {
    term.command(`cat ${args.join(" ")}`);
  },

  head: function(args) {
    term.command(`cat ${args.join(" ")}`);
  },

  open: function(args) {
    if (!args.length) {
      term.stylePrint("%open%: open a file - usage:\r\n");
      term.stylePrint("%open% test.htm");
    } else if (args[0].split(".")[0] == "test" && args[0].split(".")[1] == "htm") {
      term.openURL("https://i.imgur.com/Q2Unw.gif");
    } else if (args[0].split(".")[1] == "htm") {
      term.openURL(`./${args[0]}`, false);
    } else if (args.join(" ") == "the pod bay doors") {
      term.stylePrint("I'm sorry Dave, I'm afraid I can't do that.");
    } else {
      term.command(`cat ${args.join(" ")}`);
    }
  },

  more: function(args) {
    term.command(`cat ${args.join(" ")}`);
  },

  emacs: function() {
    term.stylePrint("%emacs% not installed. try: %vi%");
  },

  vim: function() {
    term.stylePrint("%vim% not installed. try: %emacs%");
  },

  vi: function() {
    term.stylePrint("%vi% not installed. try: %emacs%");
  },

  pico: function() {
    term.stylePrint("%pico% not installed. try: %vi% or %emacs%");
  },

  nano: function() {
    term.stylePrint("%nano% not installed. try: %vi% or %emacs%");
  },

  pine: function() {
    term.stylePrint("derekdeming17@gmail.com");
  },

  curl: function(args) {
    term.stylePrint(`Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource ${args[0]}. Use a real terminal.`);
  },

  ftp: function(args) {
    term.command(`curl ${args.join(" ")}`);
  },

  ssh: function(args) {
    term.command(`curl ${args.join(" ")}`);
  },

  sftp: function(args) {
    term.command(`curl ${args.join(" ")}`);
  },

  scp: function(args) {
    term.stylePrint(`████████████ Request Blocked: The ███████████ Policy disallows reading the ██████ resource ${args[0]}.`);
  },

  rm: function() {
    term.stylePrint("I'm sorry Dave, I'm afraid I can't do that.");
  },

  mkdir: function() {
    term.stylePrint("Come on, don't mess with our immaculate file system.");
  },

  alias: function() {
    term.stylePrint("Just call me HAL.");
  },

  df: function() {
    term.stylePrint("Nice try. Just get a Dropbox.");
  },

  kill: function(args) {
    if (args && args.slice(-1) == 337) {
      killed = true;
      term.stylePrint("Derek Deming's crypto miner disabled.");
    } else {
      term.stylePrint("You can't kill me!");
    }
  },

  killall: function(args) {
    term.command(`kill ${args.join(" ")}`);
  },

  locate: function() {
    term.stylePrint("Derek Deming");
    term.stylePrint("East coast living (message if you want specifics)");
    term.stylePrint("Available for remote work and willing to relocate");
  },

  history: function() {
    term.history.forEach((element, index) => {
      term.stylePrint(`${1000 + index}  ${element}`);
    })
  },

  find: function(args) {
    const file = args[0];
    if (Object.keys(_FILES).includes(file)) {
      term.stylePrint(_FULL_PATHS[file]);
    } else {
      term.stylePrint(`%find%: ${file}: No such file or directory`);
    }
  },

  fdisk: function() {
    term.command("rm");
  },

  chown: function() {
    term.stylePrint("You do not have permission to %chown%");
  },

  chmod: function() {
    term.stylePrint("You do not have permission to %chmod%");
  },

  mv: function(args) {
    const src = args[0];

    if (_filesHere().includes(src)) {
      term.stylePrint(`You do not have permission to move file ${src}`);
    } else {
      term.stylePrint(`%mv%: ${src}: No such file or directory`);
    }
  },

  cp: function(args) {
    const src = args[0];

    if (_filesHere().includes(src)) {
      term.stylePrint(`You do not have permission to copy file ${src}`);
    } else {
      term.stylePrint(`%cp%: ${src}: No such file or directory`);
    }
  },

  touch: function() {
    term.stylePrint("You can't %touch% this");
  },

  sudo: function(args) {
    if (term.user == "root") {
      term.command(args.join(" "));
    }
    else {
      term.stylePrint(`${colorText(term.user, "user")} is not in the sudoers file. This incident will be reported`);
    }
  },

  su: function(args) {
    user = args[0] || "root";

    if (user == "root" || user == "guest") {
      term.user = user;
      term.command("cd ~");
    } else {
      term.stylePrint("su: Sorry");
    }
  },

  quit: function() {
    term.command("exit");
  },

  stop: function() {
    term.command("exit");
  },

  whoami: function() {
    term.stylePrint(term.user);
  },

  passwd: function() {
    term.stylePrint("Wow. Maybe don't enter your password into a sketchy web-based term.command prompt?");
  },

  man: function(args) {
    term.command(`tldr ${args}`);
  },

  woman: function(args) {
    term.command(`tldr ${args}`);
  },

  ping: function() {
    term.stylePrint("pong");
  },

  ps: function() {
    term.stylePrint("PID TTY       TIME CMD");
    term.stylePrint("424 ttys00 0:00.33 %-zsh%");
    term.stylePrint("158 ttys01 0:09.70 %/bin/npm start%");
    term.stylePrint("767 ttys02 0:00.02 %/bin/sh%");
    if (!killed) {
      term.stylePrint("337 ttys03 0:13.37 %/bin/cgminer -o pwn.d%");
    }
  },

  uname: function(args) {
    switch (args[0]) {
      case "-a":
        term.stylePrint("RootPC rootpc 0.0.1 RootPC Kernel Version 0.0.1 root:xnu-31415.926.5~3/RELEASE_X86_64 x86_64");
        break;
      case "-mrs":
        term.stylePrint("RootPC 0.0.1 x86_64");
        break;
      default:
        term.stylePrint("RootPC");
    }
  },

  top: function() {
    term.command("ps");
  },

  exit: function() {
    term.command("open welcome.htm");
  },

  clear: function() {
    term.init();
  },

  zed: function() {
    term.stylePrint("Coming soon! ;)");
  },

  ge: function() {
    term.command("great_expectations");
  },

  great_expectations: function() {
    term.command("superconductive");
  },

  privacy: function() {
    term.command("privacy_dynamics");
  },

  eval: function(args) {
    term.stylePrint("please instead build a webstore with macros. in the meantime, the result is: " + eval(args.join(" ")));
  },

  jobs: function() {
    term.stylePrint(`My Work Experience:`);
    term.stylePrint(`[1]   Microsoft Security Research (AI/ML Engineer) (2023-Present)`);
    term.stylePrint(`[2]   Open-Source (ML Engineer)              (2021-Present)`);
    term.stylePrint(`[3]   Securian Financial (Data Platform SWE) (Contract)`);
    term.stylePrint(`[4]   Coca Cola (ML Engineer)                (2022-2023)`); 
    term.stylePrint(`[5]   Computational Biophysics PhD           (2020-2022)`);
    term.stylePrint(`[6]   WSU-PNNL-DOE Research                  (2018-2020)`);  
    term.stylePrint(`[7]   Concordia (Undergrad Research)         (2014-2018)`);
    term.stylePrint("\r\nUse %fg% [id] to see details of a position.");
  },

  bg: function(args) {
    term.stylePrint(`Try %fg% ${args} to see details of this position.`);
  },

  fg: function(args) {
    const job = jobs[args];

    if (job) {
      job.map(line => term.stylePrint(line));
    } else {
      term.stylePrint(`Position ${args} not found. Use %jobs% to see all positions.`);
    }
  },

  skills: function() {
    term.writeln("╔══════════════════════════════════════════════════════════════════════╗");
    term.writeln("║                         TECHNICAL SKILLS                             ║");
    term.writeln("╚══════════════════════════════════════════════════════════════════════╝");
    
    term.writeln("\r\n┌─ Programming Languages ────────────────────────────────────────────┐");
    term.writeln("│ Python • C# • C++ • JavaScript • TypeScript • Go • Rust • Zig • C  │");
    term.writeln("│ SQL • KQL • Bash                                                   │");
    term.writeln("└────────────────────────────────────────────────────────────────────┘");
    
    term.writeln("\r\n┌─ ML/AI Frameworks ───────────────────────────────----─────────────┐");
    term.writeln("│ PyTorch • TensorFlow • Keras • ONNX • TensorRT • CUDA             │");
    term.writeln("│ Scikit-learn • XGBoost • LightGBM                                 │");
    term.writeln("│ Hugging Face • Langchain • LlamaIndex • Langraph • Unsloth • vLLM │");
    term.writeln("└───────────────────────────────────────────────────────────────────┘");
    
    term.writeln("\r\n┌─ Cloud & Infrastructure ──────────────────────────────────────────┐");
    term.writeln("│ AWS: Lambda, EKS, Glue, SageMaker, S3                             │");
    term.writeln("│ Azure • GCP • Terraform • CloudFormation                          │");
    term.writeln("│ Docker • Kubernetes • Helm • Apache Spark                         │");
    term.writeln("│ Kafka • Kinesis • Airflow                                         │");
    term.writeln("└───────────────────────────────────────────────────────────────────┘");
    
    term.writeln("\r\n┌─ Databases & Storage ────────────────────────────────────────────┐");
    term.writeln("│ PostgreSQL • MySQL • MongoDB • Redis • Elasticsearch             │");
    term.writeln("│ Vector DBs: Pinecone • Weaviate • Chroma                         │");
    term.writeln("│ Cloud: Azure Cosmos DB • AWS DynamoDB • S3 • IPFS                │");
    term.writeln("└──────────────────────────────────────────────────────────────────┘");
    
    term.writeln("\r\n┌─ Security & Monitoring ────────────────────────────────-──────────┐");
    term.writeln("│ SIEM Tools • Prometheus • Grafana • OpenTelemetry                 │");
    term.writeln("│ Azure Sentinel • Splunk                                           │");
    term.writeln("└───────────────────────────────────────────────────────────────────┘");
    
    term.writeln("\r\n┌─ Specializations ─────────────────────────────────────────────────┐");
    term.writeln("│ • LLM Fine-tuning & RLHF                                          │");
    term.writeln("│ • RAG Systems & Retrieval Optimization                            │");
    term.writeln("│ • Model Optimization (Quantization, Pruning, Distillation)        │");
    term.writeln("│ • Computer Vision & NLP                                           │");
    term.writeln("│ • Graph Neural Networks & MLOps                                   │");
    term.writeln("│ • Security ML & Adversarial Defense                               │");
    term.writeln("│ • Mechanistic Interpretability & Edge Deployment                  │");
    term.writeln("└───────────────────────────────────────────────────────────────────┘");
  },

  experience: function() {
    term.stylePrint("\r\n%Senior ML Software Engineer @ Microsoft Security Research (2023 - Present)%");
    term.stylePrint("Building ML capabilities for MDO Security Research, Sonar ML detonation platform");
    term.stylePrint("\r\n%ML Software Engineer @ Open-Source Projects%");
    term.stylePrint("RLHF pipelines, RAG optimization, model fine-tuning for edge deployment");
    term.stylePrint("\r\n%Data Platform ML Engineer @ Securian Financial%");
    term.stylePrint("Scalable AI infrastructure, real-time data pipelines with AWS/Kafka/Kinesis");
    term.stylePrint("\r\n%PhD Researcher @ UC Irvine (2020 - 2022)%");
    term.stylePrint("Computational research on biological systems structural dynamics");
    term.stylePrint("\r\n%Graduate Research Fellow @ WSU (2018 - 2020)%");
    term.stylePrint("PNNL Fellow, DOE Fellow - MOFs for nuclear waste separation");
    term.stylePrint("\r\nFor detailed work history, use %jobs% or %fg [id]%");
  },

  projects: function() {
    term.stylePrint("\r\n%Recent Projects:%");
    term.stylePrint("\r\n%ONNX ML Predictor Library%");
    term.stylePrint("C#/.NET inference engine for 40+ models with <30ms p95 CPU latency");
    term.stylePrint("\r\n%Embodied Shield%");
    term.stylePrint("Jailbreak-resistant safety layer for vision-language robots");
    term.stylePrint("\r\n%Malicious QR-Code Detection%");
    term.stylePrint("PyTorch-YOLOv4/v8 model processing 500M+ messages/day");
    term.stylePrint("\r\n%GPT-2 Mechanistic Interpretability%");
    term.stylePrint("Investigated positional embeddings using TransformerLens");
    term.stylePrint("\r\n%YOLO Interpretability%");
    term.stylePrint("Layer-wise Relevance Propagation for object detection models");
    term.stylePrint("\r\n%Rapidly - Enterprise Knowledge Management%");
    term.stylePrint("LLM-powered knowledge management for organizations");
    term.stylePrint("\r\nView code on GitHub: %github%");
  },

  resume: function() {
    term.displayURL("https://drive.google.com/file/d/1wQuTZfIEQ4v7junEM2Kv1bmX0VwkTedI/view?usp=drive_link");
  },

  education: function() {
    term.stylePrint("\r\n%MS Computer Science @ Georgia Tech (2024 - 2026)%");
    term.stylePrint("Specialization: Machine Learning");
    term.stylePrint("GPA: 3.8/4.0");
    term.stylePrint("\r\n%BS Computer Science @ UC Santa Barbara (2020 - 2024)%");
    term.stylePrint("Minor: Mathematics");
    term.stylePrint("GPA: 3.75/4.0");
  },

  contact: function() {
    term.stylePrint("\r\n%Email:% derekdeming17@gmail.com");
    term.stylePrint("%LinkedIn:% linkedin.com/in/derekdeming");
    term.stylePrint("%GitHub:% github.com/derekdeming");
    term.stylePrint("%Location:% Boston, MA");
  },

  hire: function() {
    term.stylePrint("\r\nInterested in working together? Let's connect!");
    term.stylePrint("\r\nI'm open to:");
    term.stylePrint(" * Full-time opportunities in AI/ML engineering");
    term.stylePrint(" * Contract work on interesting technical challenges");
    term.stylePrint(" * Research collaborations");
    term.stylePrint(" * Open source contributions");
    term.stylePrint("\r\nReach out: derekdeming17@gmail.com");
    term.stylePrint("LinkedIn: linkedin.com/in/derekdeming");
  }
}

// Add commands for company demos
for (kv of Object.entries(portfolio)) {
  const key = kv[0];
  const val = kv[1];

  if (val["demo"]) {
    commands[key] = () => term.displayURL(val["demo"]);
  }
}

function _filesHere() {
  return _DIRS[term.cwd].filter((e) => e != 'README.md' || term.user == "root");
}
