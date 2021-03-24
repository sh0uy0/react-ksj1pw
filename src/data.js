import Faker from 'faker';

function createPost(number){
  const data = Array(number).fill({
    title: Faker.lorem.sentence(),
    body: Faker.lorem.paragraph()
  })

  return data;
}

function createComment(number){
  const data = Array(number).fill(Faker.lorem.sentence())
  return data;
}

export default function data(number){
  const data = Array(number).fill({
    user: Faker.helpers.createCard(),
    posts: createPost(number),
    comments: createComment(number)
  })
}
