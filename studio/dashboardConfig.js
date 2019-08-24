export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d6117092a5dba8c4e66ee83',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dg25s1iz',
                  apiId: '5d8e082e-a34d-4fc1-be14-2850ceb8bb14'
                },
                {
                  buildHookId: '5d611709408efd0309b4f13f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ype9swvd',
                  apiId: 'ea328545-1486-4c79-8bbf-f1e6c8a49557'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dindinet/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ype9swvd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
