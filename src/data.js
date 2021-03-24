import Faker from 'faker';

function createPost(number = 1){
  return Array(number).fill(null).map(() => ({
    title: Faker.lorem.sentence(),
    body: Faker.lorem.paragraph()
  }));
}

console.log(createPost(3));

function createComment(number = 1){
  return Array(number).fill(null).map(() => Faker.lorem.sentence());
}

export function avatar(){
  return Faker.image.image()
}

export default function data(number = 1){
  return Array(number).fill(null).map(() => ( {
    user: Faker.helpers.createCard(),
  }));
}
