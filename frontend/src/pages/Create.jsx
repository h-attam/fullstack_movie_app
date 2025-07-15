import InputField from "../components/InputField";
import { inputs } from "../utils/constants";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Form gönderilince
const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verisini al (nesne şeklinde)
    const formData = new FormData(e.target);
    const movieData = Object.fromEntries(formData.entries());

    // Kategorileri diziye çevir
    movieData.genre = movieData.genre.split(",");
    movieData.cast = movieData.cast.split(",");

    // API'ya filmi oluşturmak için istek at
    api
      .post("/api/movies", movieData)
      .then((res) => {
        toast.success("Film Listeye Eklendi");
        navigate(`/movie/${res.data.id}`);
      })
      .catch(() => {
        toast.error("Üzgünüz :( İşlem Başarısız");
      });
  };

  return (
    <div className="bg-yellow-600 flex-1 grid place-items-center px-5 py-8">
      <div className="w-full bg-white max-w-[800px] p-10 rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Yeni Film Oluştur</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {inputs.map((props, i) => (
            <InputField key={i} {...props} />
          ))}

          <button
            type="submit"
            className="shadow border py-3 rounded-lg hover:shadow-lg hover:bg-gray-200 transition"
          >
            Oluştur
          </button>
        </form>

        <div className="md:mt-10">
          <img
            src="/movie-bg.jpg"
            alt="Movie background"
            className="rounded-full max-h-[200px] m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
