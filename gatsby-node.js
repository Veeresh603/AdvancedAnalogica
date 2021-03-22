const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
      `
        {
          courses: allStrapiCourse {
           
              nodes {
                strapiId
                slug
            
            }
          }
        }
      `
    );
    result.data.courses.nodes.forEach(course => {
        createPage({
            path: `/courses/${course.slug}`,
            component: path.resolve(`src/templates/course.js`),
            context: {
                slug: course.slug,
            }
        })
    })
    }
    