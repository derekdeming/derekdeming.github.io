---
title: Small Language Model for BEC Detection
date: 2024-06-20
external_link: https://github.com/derekdeming
tags:
  - Natural Language Processing
  - Small Language Models
  - Cybersecurity
  - Business Email Compromise
---

Built an internal small language model (SLM) for Business Compromised Emails (BEC), Spam, and Phish detection, optimizing perception DNNs for enhanced production efficiency.

<!--more-->

## Project Overview

Developed a specialized small language model tailored for detecting Business Email Compromise (BEC) attacks, spam, and phishing attempts. This model represents a significant advancement in email security, combining the power of modern NLP with the efficiency requirements of enterprise-scale deployment.

## Technical Architecture

### Model Design
- **Small Language Model**: Custom architecture optimized for email classification tasks
- **Multi-task Learning**: Simultaneous detection of BEC, spam, and phishing
- **Transformer-based**: Leveraging attention mechanisms for contextual understanding
- **Domain-specific Training**: Fine-tuned on Microsoft's extensive email security dataset

### Optimization Strategies
- **Model Quantization**: FP16/INT8 precision for reduced memory footprint
- **Knowledge Distillation**: Compressed from larger teacher models
- **Architectural Pruning**: Removed redundant parameters while maintaining accuracy
- **NVIDIA TensorRT**: GPU acceleration for production deployment

## Key Features

### Advanced Detection Capabilities
- **Contextual Analysis**: Understanding email context and sender relationships
- **Linguistic Patterns**: Detection of social engineering techniques
- **Multi-language Support**: Analysis across different languages and locales
- **Real-time Processing**: Sub-second classification for incoming emails

### Production Optimization
- **Low Latency**: Optimized for real-time email filtering
- **Scalable Architecture**: Handles millions of emails daily
- **Memory Efficient**: Reduced computational overhead
- **High Throughput**: Concurrent processing capabilities

## Impact and Results

### Security Improvements
- **Enhanced Detection**: Significant improvement in BEC detection rates
- **Reduced False Positives**: More accurate classification reducing legitimate email blocking
- **Faster Response**: Real-time threat identification and response
- **Comprehensive Coverage**: Protection against evolving attack patterns

### Operational Benefits
- **Cost Efficiency**: Reduced computational costs through optimization
- **Scalable Deployment**: Successfully deployed across Microsoft's email infrastructure
- **Maintenance**: Self-updating capabilities with continuous learning
- **Integration**: Seamless integration with existing security systems

## Technologies and Tools

- **PyTorch/TensorFlow**: Model development and training
- **Hugging Face Transformers**: Pre-trained model foundations
- **NVIDIA TensorRT**: Production optimization
- **CUDA**: GPU acceleration
- **ONNX**: Model standardization and deployment
- **Microsoft Security Graph**: Integration with security ecosystem
