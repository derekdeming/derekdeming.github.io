const portfolio = {
  // Microsoft Internal Projects
  onnxpredictor: {
    name: "ONNX ML Predictor Library",
    url: "https://github.com/derekdeming",
    description:
      "Developed ONNX ML Predictor library in C#/.NET serving as CPU inference engine for 40+ models. Delivers <30ms p95 CPU inference with 45% memory savings via OrtValue pooling.",
    tech: "C#, .NET, ONNX Runtime, GraphOptimization",
    demo: null,
  },

  embodiedshield: {
    name: "Embodied Shield - Jailbreak-Resistant Safety Layer",
    url: "https://github.com/derekdeming",
    description:
      "Built jailbreak-resistant safety layer for vision-language robots with GAIA-2-style bidirectional world model. Reduced jailbreak success from 14% to <1% on 5k adversarial prompts.",
    tech: "Python, PyTorch, RT-2, Jetson Orin, LoRA",
    demo: null,
  },

  qrdetection: {
    name: "Real-Time Malicious QR-Code Detection",
    url: "https://github.com/derekdeming",
    description:
      "Built proprietary computer vision model for malicious QR code detection with PyTorch-YOLOv4/v8. Processes 500M+ MDO messages/day with 28ms p95 CPU latency.",
    tech: "PyTorch, YOLOv4/v8, ONNX, AKS, KEDA, Pyzbar",
    demo: null,
  },

  // Research & ML Projects
  gptinterpretability: {
    name: "Mechanistic Interpretability of GPT-2",
    url: "https://github.com/derekdeming/ML-Interpretability",
    description:
      "Investigated emergent properties of positional embeddings in GPT-2 using TransformerLens and custom probing classifiers. Demonstrated ability to predict word positions from residual streams.",
    tech: "Python, TransformerLens, PyTorch, Logistic Regression",
    demo: null,
  },

  yolointerpretability: {
    name: "Blackbox AI: YOLO Object Detection Interpretability",
    url: "https://github.com/derekdeming/YOLO-Interpretability",
    description:
      "Implemented Layer-wise Relevance Propagation (LRP) for YOLO model interpretability. Applied Deep Taylor Decomposition framework with LRP-0, LRP-ε, LRP-γ rules using PyTorch.",
    tech: "Python, PyTorch, LRP, Deep Taylor Decomposition",
    demo: null,
  },

  rapidly: {
    name: "Rapidly - Enterprise Knowledge Management",
    url: "https://github.com/derekdeming/Rapidly",
    description:
      "Enterprise knowledge management software deploying LLMs safely across organizations. Modern alternative to Glean/GlueAI for reliable company-wide knowledge access.",
    tech: "LLMs, Knowledge Management, Enterprise Software",
    demo: "https://www.youtube.com/watch?v=demo-link",
  },

  phi3finetune: {
    name: "Finetune Phi 3.5 using Unsloth",
    url: "https://github.com/derekdeming/LLM-stuff",
    description:
      "Fine-tuned Phi-3.5-mini-instruct on cybersecurity datasets using Unsloth library. Implemented LoRA, 4-bit quantization, and memory-efficient training with gradient accumulation.",
    tech: "Unsloth, LoRA, QLoRA, MITRE ATT&CK, HuggingFace",
    demo: null,
  },

  bioinformaticsassistant: {
    name: "BioInformatics Research Assistant",
    url: "https://github.com/derekdeming/BioIDE",
    description:
      "Domain-specific research assistant for computational biophysics research. Combined latest research context with ChatGPT knowledge to accelerate research discovery and reading.",
    tech: "ChatGPT API, Research Assistant, Bioinformatics",
    demo: null,
  },
};