// CLAUDE.md 6번: 공통 에러 핸들러 미들웨어 하나로 모든 라우트 에러를 잡아 통일된 포맷으로 반환
export function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    error: {
      code: err.code || 'INTERNAL_ERROR',
      message: err.message || '서버 오류가 발생했습니다.',
    },
  });
}

export function notFoundHandler(req, res) {
  res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: '요청한 경로를 찾을 수 없습니다.' } });
}
