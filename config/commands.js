const whoisDerek = "Derek Deming is a Software/ML Engineer passionate about building innovative solutions at the intersection of AI, interpretability, and full-stack development. With experience at companies like Microsoft Security Research and Coca Cola, Derek specializes in machine learning systems, inference optimization, interpretability, and scalable data solutions. Currently at Microsoft Security Research leading agentic security research and evals. Try %skills%, %experience%, or %projects% to learn more.";
const timeUnit = 1000;

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
        if (cmd != 'help') {
          term.writeln("");
        }
        term.stylePrint(cmd);
        term.stylePrint(desc);
      }
    })
  },

  whois: function(args) {
    const name = args[0];
    if (!name || name == "derek") {
      term.stylePrint(whoisDerek);
    } else {
      term.stylePrint(`User ${name || ''} not found. Try: %whois derek%`);
    }
  },

  git: function() {
    term.displayURL("https://github.com/derekdeming");
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

  echo: function(args) {
    const message = args.join(" ");
    term.stylePrint(message);
  },

  pwd: function() {
    term.stylePrint("/" + term.cwd.replaceAll("~", `home/${term.user}`));
  },

  ls: function() {
    term.stylePrint(_filesHere().join("   "));
  },

  cd: function(args) {
    let dir = args[0] || "~";
    if (dir != "/") {
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
  },

  grep: function(args) {
    const q = args[0];
    const filename = args[1];

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

  whoami: function() {
    term.stylePrint(term.user);
  },

  ping: function() {
    term.stylePrint("pong");
  },

  ps: function() {
    term.stylePrint("PID TTY       TIME CMD");
    term.stylePrint("424 ttys00 0:00.33 %-zsh%");
    term.stylePrint("158 ttys01 0:09.70 %/bin/npm start%");
    term.stylePrint("767 ttys02 0:00.02 %/bin/sh%");
  },

  uname: function(args) {
    switch (args[0]) {
      case "-a":
        term.stylePrint("1.0.0");
        break;
      case "-mrs":
        term.stylePrint("1.0.0");
        break;
      default:
        term.stylePrint("1.0.0");
    }
  },

  exit: function() {
    term.command("open welcome.html");
  },

  clear: function() {
    term.init();
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
  },

  locate: function() {
    term.stylePrint("Derek Deming");
    term.stylePrint("Boston, MA");
    term.stylePrint("Available for remote work and willing to relocate");
  },

  man: function(args) {
    term.stylePrint(`Help for command: ${args.join(" ")}`);
  },

  woman: function(args) {
    term.command(`man ${args.join(" ")}`);
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

  more: function(args) {
    term.command(`cat ${args.join(" ")}`);
  },

  top: function() {
    term.command("ps");
  },

  quit: function() {
    term.command("exit");
  },

  stop: function() {
    term.command("exit");
  }
}

function _filesHere() {
  return _DIRS[term.cwd].filter((e) => e != 'README.md' || term.user == "guest");
}