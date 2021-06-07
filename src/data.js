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
// fun

export function avatar(){
  return `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/200/`;
}

export default function data(number = 1){
  return Array(number).fill(null).map(() => ( {
    user: Faker.helpers.createCard(),
  }));
}
