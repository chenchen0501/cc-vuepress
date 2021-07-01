module.exports = {
	title: '陈大事的blog',
	dest: './dist', // 设置输出目录
	repo: 'https://github.com/txs1992/mt-blog',
	themeConfig: {
		// 添加导航栏
		nav: [
			{ text: '博客', link: '/' },
			{ text: '介绍', link: '/blog/' },
			{ text: '项目', link: '/zhihu/' },
			{
				text: 'github',
				// 这里是下拉列表展现形式。
				items: [
					{ text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
					{ text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' },
				],
			},
		],
		// 为以下路由添加侧边栏
		sidebar: ['/', '/git', '/vue'],
	},
};
