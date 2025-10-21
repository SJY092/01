const supabase = createClient(
  'https://rygawaqskvijgaciinzc.supabase.co',
  'sb_secret_5q_E9M6iBVNEb2peBFtg1w_YaxXeeGR'
);



//加入前端
//前端資料

fetch('./API.json')   // API.json 路徑
  .then(res => res.json())
  .then(config => {
    const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)
    // 這裡就可以安全使用 Supabase，例如查詢、登入等
  })
