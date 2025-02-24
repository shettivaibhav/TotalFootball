import React from "react";

const trainingVideos = {
  Attacker: [
    { id: "indatt1", url: "https://youtube.com/watch?v=sfP9nVmU9sY" },
    { id: "indatt2", url: "https://youtube.com/watch?v=BPd1teSaHok" },
    { id: "indatt3", url: "https://youtu.be/Wo70tqnkj-M?si=CT0FZ68QNlRn179O" },
    { id: "indatt4", url: "https://youtu.be/iIYgLHY84A8?si=RACXIgrngLWoqwbz" },
  ],
  Midfielder: [
    { id: "indmid1", url: "https://youtu.be/rhSxSFtyw0A?si=4AhN4a9r1CR28P11" },
    { id: "indmid2", url: "https://youtu.be/hU95fnqc8WM?si=_guB2_k561M3Ohk2" },
    { id: "indmid3", url: "https://youtu.be/Vi4PYfxrRKw?si=Hbu_FqHa2cNVvJVV" },
    { id: "indmid4", url: "https://youtu.be/WR9zF9RsoPI?si=okzj5r3Ef4aJ_4Jb" },
  ],
  Defender: [
    { id: "inddef1", url: "https://youtube.com/watch?v=K17wDaDcuyY" },
    { id: "inddef2", url: "https://youtu.be/-MZ74SMZ9sM?si=LVgK9R3SJfTDzvOr" },
    { id: "inddef3", url: "https://youtu.be/ENgKv5KvV1o?si=5SafDiYuNwPjnVB5" },
    { id: "inddef4", url: "https://youtu.be/gB8BK9eBd7w?si=D9yyn5R2hetw7e-i" },
  ],
  Goalkeeper: [
    { id: "indgk1", url: "https://youtu.be/8JcN2PXnDqM?si=PCDinhONam6d_h7u" },
    { id: "indgk2", url: "https://youtu.be/loGSlMJEkaY?si=uQam3SWr1BjGKVxR" },
    { id: "indgk3", url: "https://youtu.be/lQQUrbATlhI?si=ZDM4PvAqfXo1SF2k" },
    { id: "indgk4", url: "https://youtu.be/v36snA3Dsg8?si=yhB4HXUVYP34rAit" },
  ],
  Fundamentals: [
    { id: "ff1", url: "https://youtu.be/PRMePZKFVj4?si=9bmglXQ4nIQygaAG" },
    { id: "ff2", url: "https://youtu.be/2E10RewylsA?si=-J2pjglkU2SlZEXX" },
    { id: "ff3", url: "https://youtu.be/FmVQniDnqCg?si=0WhxtQuUN2QYGwL7" },
    { id: "ff4", url: "https://youtu.be/0b9N1sCpOWg?si=qxjqXgERWW8zOrWO" },
    { id: "ff5", url: "https://youtu.be/RJLLZRP27l0?si=g1hFqAOQ9eeX7dyx" },
    { id: "ff6", url: "https://youtu.be/oxdikTX8gx4?si=TV4I9p2JAz8RW5N6" },
    { id: "ff7", url: "https://youtu.be/-pJhNtQr27o?si=G6YiSqZmzb2aGfes" },
    { id: "ff8", url: "https://youtu.be/hRzd8CHl_hY?si=GgIUwzvFVDDkimmO" },
    { id: "ff9", url: "https://youtu.be/BJz1kONmvWk?si=M7q4F00tlDluFuf8" },
    { id: "ff10", url: "https://youtu.be/KXZaP0niM3g?si=MUYr4RtH6LVp_xNs" },
    { id: "ff11", url: "https://youtu.be/IGeawRX0tUY?si=ET4zFhkyIbc7dD9z" },
    { id: "ff12", url: "https://youtu.be/G5vxihcDNP4?si=DUQKY7hEpqPARvhw" },
    { id: "ff13", url: "https://youtu.be/8fNrSHW-x8I?si=LIcctsuBcbCnzj-p" },
    { id: "ff14", url: "https://youtu.be/tpaeZBHL8JE?si=L3xjAUsQTxuPZXsW" },
    { id: "ff15", url: "https://youtu.be/Wrjr0ekugjI?si=2ycA-r4vbhr80mdo" },
    { id: "ff16", url: "https://youtu.be/qphmLjb250Q?si=djC9LyUKOYbK3o9q" },
  ],
};

const Training = () => {
    return (
      <div
        className="min-h-screen text-white px-6 py-10"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Main Header */}
        <h1 className="text-7xl font-bold text-center mb-8 font-sans text-white relative z-10 bg-black py-4 w-full">
  Football Training Videos
</h1>

        {/* Looping through categories */}
        {Object.entries(trainingVideos).map(([category, videos]) => (
          <div key={category} className="mb-12 relative z-10">
            {/* Category Header */}
            <h2 className="text-4xl font-semibold mb-4 border-b-4 border-white pb-2 font-sans text-black text-center">
              {category}
            </h2>
  
            {/* Displaying Videos */}
            {videos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-lg shadow-lg p-3 text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-200"
                  >
                    <img
                      src={`/src/images/training/${category}/${video.id}.jpg`}
                      alt={video.id}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center font-semibold bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
                    >
                      Watch Video
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-300 text-center">Videos coming soon...</p>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Training;