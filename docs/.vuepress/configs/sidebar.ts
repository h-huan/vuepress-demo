
export default {
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar()
}

function getComponentsSidebar() {
  return [
    {
      isGroup: true,
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button.md'
        },
        {
          text: 'table 标签页',
          link: '/components/table.md'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      isGroup: true,
      text: '指南',
      children: [
        { text: '文档1', link: '/guide/intromd.md' },
        { text: '文档2', link: '/guide/intromd.md' }
      ]
    },
    {
      isGroup: true,
      text: '教程',
      children: [
        { text: '教程1', link: '/guide/intromd.md' },
        { text: '教程2', link: '/guide/intromd.md' }
      ]
    }
  ]
}

