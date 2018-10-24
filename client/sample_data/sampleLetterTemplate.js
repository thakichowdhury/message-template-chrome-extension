module.exports = {
  sampleLetterTemplate: `Thaki Chowdhury
(313) 318-1347
thaki.chowdhury@gmail.com
San Francisco, CA


Dear [contact],

  I’m excited about the potential opportunity to join the team at [company]. As a software engineer who's passionate about [relevantCompanyValues], I’d love to use my skills with [relevantTech] to hit the ground running and add value to any project.

For example, I recently worked on a team of engineers to scale up the backend of a reviews microservice on an e-commerce platform. I optimized a PostgreSQL database with 30M entries for a read/write heavy system, stress tested the API, implemented Redis in-memory caching, and horizontally scaled the NodeJS backend to several AWS EC2 instances, with load balancing, to handle high throughput while still maintaining low latency.

On a different team, we were tasked with building and deploying a housing rental platform. For my microservice, I implemented TDD with Jest/Enzyme and CircleCI to create an automated testing suite, created modular, dynamic components with React, and constructed a RESTful API with Node/Express connected to a MySQL database. Lastly, I containerized the microservice with Docker for easy coupling with other services and deployed it to AWS EC2.

My emphasis on clean, reusable and well-tested code not only ensures a positive user experience for the product users but to future engineers that inherit that codebase as well.

I’d love an opportunity to discuss this position further and showcase how I can provide value to the [company] team. What might be the most convenient time for us to chat this week?

Sincerely
Thaki Chowdhury`,
  sampleTemplatePhrases: [
    {
      id: 0,
      name: 'contact',
      value: ''
    },
    {
      id: 1,
      name: 'company',
      value: ''
    },
    {
      id: 2,
      name: 'relevantCompanyValues',
      value: ''
    },
    {
      id: 3,
      name: 'relevantTech',
      value: ''
    }
  ],
};
