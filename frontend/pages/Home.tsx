//about me page, separate from home

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-rose-300">
      <h1 className="text-4xl font-bold mb-8 text-gray-500">
        About Me
      </h1>
      <div className="flex justify-center mb-6">
      <img src = "images/portrait.jpg" alt = "portrait" className="w-48 h-48 rounded-full mb-4"/>
      </div>
      <p className="text-gray-500 mb-4">
        Hello! My name is Urja, and I'm a first-year master's student at UCLA passionate about building practical, 
        real-world solutions with technology. Whether I'm working with Python, C++, SQL, or web technologies, I enjoy tackling 
        complex problems and using code to make an impact. Feel free to connect and check out my projects!
      </p>

    </div>
    );
}