# Twin Tip Solutions - Project Documentation

## Overview
Twin Tip Solutions is an AI-powered healthcare technology company developing innovative mobile applications that leverage machine learning and LLMs to improve health outcomes. Founded by Reid Glaze (MS Mechanical Engineering, CU Boulder with AI/ML focus).

## Company Mission
To democratize access to AI-powered health insights through secure, user-friendly mobile applications while maintaining the highest standards of data privacy and HIPAA compliance.

## Current Products

### 1. DermaWhiz
- **Status**: Live on App Store and Google Play
- **Description**: Educational skin health app with AI-powered photo analysis
- **Key Features**:
  - AI photo analysis using advanced computer vision
  - RAG (Retrieval-Augmented Generation) system for evidence-based insights
  - HIPAA-aligned architecture with end-to-end encryption
  - Educational content about skin conditions
  - Disclaimer: Not a medical diagnosis tool

### 2. HeartHealthAI  
- **Status**: Live on App Store and Google Play
- **Description**: AI-powered nutrition tracking and heart health optimization
- **Key Features**:
  - Food photo analysis using computer vision
  - Automatic macro and calorie tracking
  - Personalized health scores
  - Heart-healthy meal recommendations

### 3. White Label Solutions (HIPAA-Aligned)
- **Status**: In development
- **Description**: Customizable healthcare AI solutions for enterprise clients
- **Target Market**: Healthcare organizations, clinics, hospitals
- **Key Differentiators**:
  - Full HIPAA compliance architecture
  - Customizable branding and features
  - Enterprise-grade security
  - Scalable cloud infrastructure

## Technical Architecture

### Security Implementation
- Multi-layer encryption (AES-256-GCM)
- Anonymous Cloud Identity Auth with signed BAA
- Rate limiting based on hashed UID
- Ephemeral storage for sensitive data
- Face ID requirement for client access
- TLS/HTTPS default encryption
- Audit logging and least privilege IAM
- No CORS, VPC boundary protection
- Input validation at multiple layers

### Tech Stack
- **Frontend**: Next.js 15.3, React 19, TypeScript, Tailwind CSS v4
- **Mobile**: Native iOS and Android development
- **Backend**: Cloud Functions, Firebase
- **AI/ML**: Vertex AI, Custom vision models
- **Security**: End-to-end encryption, secure key management

## Founder Information
**Reid Glaze**
- MS Mechanical Engineering, CU Boulder (AI/ML focus)
- LinkedIn: https://www.linkedin.com/in/reidhglaze/
- Expertise: AI/ML, mobile development, healthcare technology

## Google Cloud Startup Requirements

### Clear Business Description
Twin Tip Solutions develops AI-powered healthcare applications that make advanced health insights accessible to everyone while maintaining strict data privacy standards.

### Target Audience
- **B2C**: Health-conscious individuals seeking AI-powered health insights
- **B2B**: Healthcare organizations requiring HIPAA-aligned AI solutions

### Problems We Solve
1. Limited access to dermatological expertise
2. Difficulty tracking nutrition and its impact on heart health
3. Healthcare organizations' need for secure, compliant AI solutions

### Current Development Stage
- Two production apps live on App Store and Google Play
- Active user base with positive reviews
- White label platform in beta development
- Enterprise partnerships in negotiation

## Important Notes
- All medical disclaimers are prominently displayed
- Not intended to replace professional medical advice
- Full compliance with App Store and Google Play health app guidelines
- Commitment to user privacy and data security

## Links
- Website: https://twintipsolutions.com
- DermaWhiz iOS: [App Store Link]
- DermaWhiz Android: [Google Play Link]
- HeartHealthAI iOS: [App Store Link]
- HeartHealthAI Android: [Google Play Link]

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type checking
npm run typecheck
```

## File Structure
```
/src/app - Next.js app router pages
/public - Static assets (logos, images)
/src/components - React components (to be created)
```