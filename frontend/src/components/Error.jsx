const Error = ({ info, refetch }) => {
  return (
    <div className="my-10 text-center bg-red-600 p-5 rounded-md max-w-[500] mx-auto text-white px-20 ">
      <h1>Üzgünüz bir hata oluştu :( </h1>
      <h1>{info.message}</h1>

      <button
        onClick={refetch}
        className="border rounded-md px-3 py-1 mt-5 hover:bg-white hover:text-black transition"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
