import { Router } from 'express';

const router = Router();

// 화요일 Task 완료 기준: /api/health 응답 확인용
router.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok', time: new Date().toISOString() } });
});

export default router;
