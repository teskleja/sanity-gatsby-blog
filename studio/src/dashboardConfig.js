export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602dc4a9edaee9216c9662d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k365bu7y',
                  apiId: 'de0184e6-691e-43a6-ae82-7a660c7692fa'
                },
                {
                  buildHookId: '602dc4a9ec128824f62e5184',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p1z9hzry',
                  apiId: 'e04a0097-10d6-4922-b493-362f4e185359'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/teskleja/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p1z9hzry.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
