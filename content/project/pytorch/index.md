---
title: QR Code Threat Detection System
date: 2024-03-10
external_link: https://github.com/derekdeming
tags:
  - Computer Vision
  - Cybersecurity
  - TensorRT
  - YOLO
---

Built a near real-time computer vision model for detecting and decoding malicious QR codes in messages, saving over 25 million dollars annually in computational costs.

<!--more-->

## Project Overview

Developed an advanced computer vision system to identify and analyze potentially malicious QR codes in real-time messaging and email platforms. This system addresses the growing threat of QR code-based phishing and malware distribution.

## Technical Implementation

### Model Architecture
- **YOLO-based Detection**: Custom YOLO model for QR code localization
- **Classification Network**: Deep neural network for malicious content identification
- **Multi-stage Pipeline**: Detection → Decoding → Threat Analysis

### Optimization Techniques
- **TensorRT Acceleration**: GPU optimization for production deployment
- **Model Quantization**: FP16/INT8 precision for reduced computational overhead
- **Batch Processing**: Efficient handling of multiple QR codes simultaneously

### Performance Metrics
- **Latency**: Sub-30ms inference time
- **Accuracy**: 40% reduction in false positive rates
- **Throughput**: Real-time processing at enterprise scale

## Key Achievements

- **Cost Savings**: $25M+ annual savings through automated detection
- **Production Deployment**: Successfully deployed across Microsoft's messaging infrastructure
- **Scalability**: Handles millions of QR code scans daily
- **Security Impact**: Significant reduction in successful QR code-based attacks

## Technologies Used

- **NVIDIA TensorRT**: GPU acceleration and optimization
- **CUDA**: Parallel processing for enhanced performance
- **ONNX**: Model standardization and deployment
- **OpenCV**: Image processing and QR code decoding
- **Custom Neural Networks**: Tailored architectures for threat detection
