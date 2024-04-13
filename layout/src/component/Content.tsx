import img1 from '../image/pic1.avif'
 import img2 from '../image/pic2.avif'
 import img3 from '../image/pic3.avif'
 import img4 from '../image/pic4.avif'
import Content2 from './Content2';

 interface Post {
    id: number;
    imageUrl: string;
    date: string;
    title: string;
    description: string;
  }

// Sample data array
const postData:Post[] = [
  {
    id: 1,
    imageUrl: img1,
    date: "April 2, 2022",
    title: "The Pines and the Mountains",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
  },
  {
    id: 2,
    imageUrl: img2,
    date: "April 2, 2022",
    title: "The Coding Mania",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
  },
  {
    id: 3,
    imageUrl: img3,
    date: "April 2, 2022",
    title: "Architectural Warfare",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
  },
  {
    id: 4,
    imageUrl: img4,
    date: "April 2, 2022",
    title: "Blues in Architecture",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo."
  }
];

const Content = () => {
  // Optionally, you can use state to manage the data
  // const [posts, setPosts] = useState(postData);

  return (
    <div className='container mx-auto pt-24 h-screen overflow-y-scroll no-scrollbar'>
      <section className="bg-white  sm:py-8 lg:py-12 h-screen  ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {postData.map((post) => (
              <article key={post.id} className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                  <img src={post.imageUrl} alt="#" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                </a>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <h2 className="text-xl font-bold text-gray-800">
                    <a href="#" className="transition duration-100 hover:text-blue-400 active:text-blue-400">{post.title}</a>
                  </h2>
                  <p className="text-gray-500">{post.description}</p>
                  <div>
                    <a href="#" className="font-semibold text-blue-400 transition duration-100 ">Read more</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Content2/>
    </div>
  );
}

export default Content;
