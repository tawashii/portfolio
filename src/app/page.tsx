'use client';

import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            tawashi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-200">
            Issei Wake | テクニカルライター、コーポレートIT、QA
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            マニュアル作成からプロジェクト管理、データ分析まで幅広い経験を持つITプロフェッショナル。
            ユーザー視点を大切にした品質の高いソリューションを提供します。
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/tawashii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://x.com/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              X (Twitter)
            </a>
            <a 
              href="https://zenn.dev/taa_wash1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Zenn
            </a>
            <a 
              href="https://lapras.com/public/tawashi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              LAPRAS
            </a>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              経歴を見る
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">スキル・技術</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Writing */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">テクニカルライティング</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• マニュアル設計・執筆</li>
                <li>• プロジェクト管理・進行</li>
                <li>• Markdown, HTML, CSS</li>
                <li>• GitHub, VSCode</li>
              </ul>
            </div>

            {/* Development */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">開発・技術</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Python, SQL</li>
                <li>• Linux, Windows Server</li>
                <li>• VMware 仮想環境</li>
                <li>• Git, GitHub</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">ツール・サービス</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Zendesk, Jira, Confluence</li>
                <li>• Google Analytics, Miro</li>
                <li>• Office365, kintone</li>
                <li>• Zoom, Teams, Slack</li>
              </ul>
            </div>

            {/* Analysis */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">データ分析</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• テキストマイニング</li>
                <li>• アンケート集計・分析</li>
                <li>• Excel データ可視化</li>
                <li>• 改善提案・レポート</li>
              </ul>
            </div>

            {/* QA */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">品質保証</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 試験設計・実施</li>
                <li>• リリース作業</li>
                <li>• 不具合調査・報告</li>
                <li>• 品質レビュー</li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">サポート・管理</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• ユーザーサポート</li>
                <li>• プロジェクト管理</li>
                <li>• フルリモート勤務</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">職務経歴</h2>
          
          <div className="space-y-12">
            {/* Technical Writer */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">テクニカルライター</h3>
                <span className="text-blue-600 font-medium">2022年1月 ～ 2024年12月</span>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>• サイボウズ Office マニュアルサイトの執筆・更新・ディレクション</p>
                <p>• リリーススケジュールに合わせた計画・進行管理・品質レビュー</p>
                <p>• マニュアル移行プロジェクト（GitHub + Markdown）の主導・完遂</p>
                <p>• UI/仕様変更時の改訂ポイント抽出・反映作業</p>
              </div>
            </div>

            {/* QA */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">QAエンジニア</h3>
                <span className="text-blue-600 font-medium">2024年4月 ～ 2024年6月</span>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>• ソフトウェア試験設計・実施（約20件、200項目）</p>
                <p>• リリース作業の実施（5回）</p>
                <p>• 不具合報告・再現確認</p>
                <p>• 開発チームとの仕様確認・連携</p>
              </div>
            </div>

            {/* IT & Analysis */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">IT担当・分析</h3>
                <span className="text-blue-600 font-medium">2020年2月 ～ 2022年1月</span>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>• 社内システム運用管理（アルファスコープ、Zendesk、VMware）</p>
                <p>• ユーザーアンケート実施・分析・改善提案</p>
                <p>• 問い合わせ内容のテキストマイニング分析</p>
                <p>• 新卒研修チューター・面接担当</p>
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">テクニカルサポート</h3>
                <span className="text-blue-600 font-medium">2018年4月 ～ 2020年1月</span>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>• サイボウズ Office ユーザーサポート（電話・メール対応）</p>
                <p>• 日次対応：電話約20件、メール5～10件</p>
                <p>• ユーザーイベント・採用活動への参加</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            プロジェクトのご相談やお仕事の依頼がございましたら、お気軽にご連絡ください。
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              現在、テクニカルライティング、QA、データ分析、プロジェクト管理などの
              お仕事をお受けしています。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              地方在住のため、フルリモートでの勤務を希望しています。
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                お問い合わせはこちらまで
              </p>
              <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                hitonari.cr@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 tawashi Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}