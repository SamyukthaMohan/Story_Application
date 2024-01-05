import React from 'react';
import PodcastEpisode from './PodcastEpisode'; 
import './Dashboard.css'; 
import Audio from './Audio/audio.mp3'


const episodes = [
  {
    id: 1,
    title: 'The Lion King',
    description: 'The movie is about a young lion prince who learns about his role as prince and in the circle of life. It is dedicated to Frank Wells.',
    audioUrl: {Audio},
    imageUrl: "https://m.media-amazon.com/images/I/81BMmrwSFOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: 'The Jungle Book',
    description: 'Captain Jack and his crew search for buried treasure.',
    audioUrl: "https://ia801607.us.archive.org/26/items/jungle_book_mh_0808_librivox/junglebook_kipling_01_64kb.mp3",
    imageUrl: 'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5541/675541-v',
  },
  {
    id: 3,
    title: 'Avengers',
    description: 'The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/817/400/915/gamora-rocket-scarlet-witch-nebula-wallpaper-preview.jpg', 
  },
  
];
const episodes1 = [
  {
    id: 4,
    title: 'Tenali Raman',
    description: 'Tenali Raman was once walking along a forest path when he was stopped by a merchant. “I’m looking for my camel which has strayed away. Did you see it passing by?” asked the merchant. “Had the camel hurt its leg?” asked Raman. “Oh yes! That means you have seen my…',
    audioUrl: {Audio},
    imageUrl: "https://kathakids.com/static/story-images/2020/03/6-1160x859.jpg",
  },
  {
    id: 5,
    title: 'The Three Promises',
    description: 'Captain Jack and his crew search for buried treasure.',
    audioUrl: "https://ia801607.us.archive.org/26/items/jungle_book_mh_0808_librivox/junglebook_kipling_01_64kb.mp3",
    imageUrl: 'https://kathakids.com/static/story-images/2019/08/the-three-promisesKK-1160x746.jpg',
  },
  {
    id: 6,
    title: 'Chhota Bheem',
    description: 'Chhota Bheem is an Indian animated series adventures about a boy named Bheem and his friends in fictional village of Dholakpur.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://e0.pxfuel.com/wallpapers/353/843/desktop-wallpaper-chhota-bheem-chota-bheem.jpg', 
  },
  
];
const episodes2 = [
  {
    id: 7,
    title: 'Anne of Green Gables',
    description: 'Anne Shirley, now 16, is moving from childhood into adulthood. As she begins teaching at Avonlea school she is determined to treat the children as she wishes she had been treated, and has many ...',
    audioUrl: {},
    imageUrl: "https://books.google.co.in/books/content?id=vITM3BiLYs8C&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1Zzkpm7RREVzIkb4xoc-hAb1zUfw&w=1280",
  },
  {
    id: 8,
    title: 'The Story of Yes And No',
    description: 'Have you ever wondered where the words Yes and No came from? This fun, fictional origin story for kids takes place in a small kingdom, long ago, where two brothers, who could not be more different, found themselves in trouble with a king. ',
    audioUrl: "",
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/f196966f-3cf7-4ce9-b8f7-774dd98f0e5e/8%281%29+FCS+Cover+Smaller.jpeg?format=1500w',
  },
  {
    id: 9,
    title: 'When do Hippos Play',
    description: 'Do you know what the Hippos of Africa do long after the Elephants and Rhinos have gone to sleep? This rhythmical story will teach kids about the habits of Hippos at night.',
    audioUrl: 'audio/episode3.mp3', 
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1d6ebd3f-333f-4a58-830f-9d834d6d3956/When+Do+Hippos+Play+Cover+Small+Thumbnail.jpeg?format=1500w', 
  },
  
];


function DashboardPage() {

  
  
  return (
    <div>
      
      <div className="dashboard">
      <p className='originals'></p>
      <div className="episode-list">
        {episodes.map((episode) => (
          <PodcastEpisode key={episode.id} episode={episode} />
        ))}
      </div>
      <div className="episode-list1">
        {episodes1.map((episode) => (
          <PodcastEpisode key={episode.id} episode={episode} />
        ))}
      </div>
      <div className="episode-list2">
        {episodes2.map((episode) => (
          <PodcastEpisode key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
    
    </div>
  );
}

export default DashboardPage;