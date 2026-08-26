//about me page, separate from home

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "cyan" }}>
        About Me
      </h1>
      <div className="flex justify-center mb-6">
      <img src = "../images/portrait.jpg" alt = "portrait" className="w-48 h-48 rounded-full mb-4"/>
      </div>
      <p className="text-slate-300 mb-4">
        Hello! My name is Urja, and I'm a recent UCI graduate passionate about building practical, real-world solutions with technology.
      </p>
      
      <p className="text-slate-300 mb-4">
        Whether I'm working with Python, C++, SQL, or web technologies, I enjoy tackling complex problems and using code to make an impact.
      </p>
    </div>
    );
}