/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_CLIENT_SECRET: string;
  // 필요한 다른 환경 변수들을 추가할 수 있습니다.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


