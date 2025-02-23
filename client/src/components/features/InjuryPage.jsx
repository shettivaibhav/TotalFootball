import React, { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const InjuryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const tips = [
    "1. Always perform proper warm-ups before training or playing.",
    "2. Incorporate activation exercises for your major muscle groups (hip flexors, quads, hamstrings, etc.).",
    "3. Stay hydrated throughout the day and during exercise.",
    "4. Pay attention to recovery – rest, stretching, and foam rolling are essential after intense sessions.",
    "5. Wear proper footwear suited for the surface you're playing on.",
    "6. Don't neglect strengthening exercises for injury-prone areas like ankles, knees, and hamstrings.",
    "7. Take regular rest days and avoid overtraining.",
    "8. Always listen to your body – if you feel pain or discomfort, don't push through it."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="w-full p-10 text-left text-black font-bold shadow-none ml-10 bg-transparent">
        <h1 className="text-9xl font-extrabold">Injury Prevention & Recovery</h1>
        <p className="mt-4 text-xl font-semibold">Cause?  Prevent!  Strengthen🏋️</p>
      </div>

      
        {/* Left Part: Image */}
        <div className="flex-3">
          <img src="/src/images/injury/Quadricep.svg" className="w-full h-auto" alt="Injury Prevention" />
        </div>

        {/* Right Part: Dropdown Menu */}
        <div className="flex-1 pl-8">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button
                onClick={toggleDropdown}
                className="w-full text-lg font-semibold text-blue-600 p-6 bg-white border-2 border-blue-600 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
              >
                Choose Injury to Learn More
              </button>
            </DropdownMenuTrigger>

            {isOpen && (
              <DropdownMenuContent className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <DropdownMenuItem>
                  <a href="#ankle" className="text-blue-500 hover:text-blue-300">Ankle Sprains</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#hamstring" className="text-blue-500 hover:text-blue-300">Hamstring Strain</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#acl" className="text-blue-500 hover:text-blue-300">ACL Injuries</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#groin" className="text-blue-500 hover:text-blue-300">Groin Strain</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#shin" className="text-blue-500 hover:text-blue-300">Shin Splints</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#knee" className="text-blue-500 hover:text-blue-300">Knee Injuries</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#calf" className="text-blue-500 hover:text-blue-300">Calf Strain</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#quad" className="text-blue-500 hover:text-blue-300">Quadriceps Strain</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#hip" className="text-blue-500 hover:text-blue-300">Hip Flexor Injury</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#shoulder" className="text-blue-500 hover:text-blue-300">Shoulder Injury</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
     
      
      <div className="pt-24">
        {/* Ankle Sprains Section */}
        <div id="ankle" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">1. Ankle Sprains</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Sudden changes in direction, twisting movements, or stepping on another player's foot.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Strengthening the muscles around the ankle joint and improving balance.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Single-Leg Box Jumps <a href="https://youtu.be/w5PUa6QYpe0?si=0h7bgfuMIJf6wsRA" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Resistance Band Ankle Inversion/Eversion <a href="https://youtu.be/50YDq8_OA_w?si=jDf-S-VG1X_pak-s" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Ankle Dorsiflexion with Weight <a href="https://youtu.be/jy7SSbxcQnw?si=xTQESzh21_mNDWKg" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Hamstring Strain Section */}
        <div id="hamstring" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">2. Hamstring Strain</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Sudden acceleration or deceleration, overstretching, or improper warm-up.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Stretching and strengthening exercises targeting the hamstrings and glutes.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Nordic Hamstring Curls <a href="https://youtube.com/shorts/1IIavrSbEvo?si=tc1aF-pbBsj0esCc" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Single-Leg Deadlifts <a href="https://youtu.be/FAFYkQCQJYo?si=hkzE4TjPaTzur7Yh" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Kettlebell Swings <a href="https://youtu.be/1cVT3ee9mgU?si=MUOhWa7JH8RaRY8x" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* ACL Injuries Section */}
        <div id="acl" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">3. ACL Injuries</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Sudden twisting or direct impact, often from a tackle or jumping with a landing.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Exercises focused on strengthening the quads, hamstrings, and hip muscles.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Single-Leg Box Jumps <a href="https://youtu.be/w5PUa6QYpe0?si=0h7bgfuMIJf6wsRA" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Bulgarian Split Squats <a href="https://youtu.be/Fmjj7wFJWRE?si=yOzPDCl9k-WAvzec" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Step-Ups with Dumbbells <a href="https://youtu.be/9ZknEYboBOQ?si=aKOrNnZyjz4Bh4TL" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Groin Strain Section */}
        <div id="groin" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">4. Groin Strain</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Sudden movements involving the adductor muscles of the groin.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Stretching and strengthening the hip flexors and adductors.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Adductor Squeeze <a href="https://youtu.be/rTHyMtaG5A4?si=fRRqkDlg2Jq5E3GK" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Side Lunges <a href="https://youtu.be/zejTuBTEkfY?si=FljAdcJXUHzkaPW0" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Copenhagen Adductor Plank <a href="https://youtu.be/omcxYSiUg5M?si=zI4ja6Gua07SY00r" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Shin Splints Section */}
        <div id="shin" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">5. Shin Splints</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Overuse, poor footwear, or running on hard surfaces.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Strengthening the shin muscles and improving running technique.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Toe Raises with Weight <a href="https://youtu.be/enJ6yYJerVw?si=kUiDUkIxG2eHlo5a" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Eccentric Heel Drops <a href="https://youtu.be/3tc0lN_bW5o?si=QCg6iAgjuXnBtS7w" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Reverse Lunges <a href="https://youtu.be/Ry-wqegeKlE?si=WJiphiuYJp5E4B50" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Knee Injuries Section */}
        <div id="knee" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">6. Knee Injuries</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Twisting motions, direct contact, or overuse of the knee joint.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Strengthening the quadriceps, hamstrings, and calf muscles while increasing flexibility.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Bulgarian Split Squats <a href="https://youtu.be/Fmjj7wFJWRE?si=yOzPDCl9k-WAvzec" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Step-Ups with Dumbbells <a href="https://youtu.be/9ZknEYboBOQ?si=aKOrNnZyjz4Bh4TL" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Wall Sits <a href="https://youtu.be/X4j6q5rYn7Y?si=0aF5AOU0Rya60VHz" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Calf Strain Section */}
        <div id="calf" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">7. Calf Strain</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Sudden bursts of speed, overexertion, or improper stretching.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Regular calf stretches and strengthening exercises.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Standing Calf Raises <a href="https://youtu.be/example7" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Seated Calf Raises <a href="https://youtu.be/example8" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Single-Leg Calf Raises <a href="https://youtu.be/example9" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Quadriceps Strain Section */}
        <div id="quad" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">8. Quadriceps Strain</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Overstretching or sudden forceful movements.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Stretching and strengthening the quadriceps muscles.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Leg Extensions <a href="https://youtu.be/example10" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Squats <a href="https://youtu.be/example11" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Lunges <a href="https://youtu.be/example12" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Hip Flexor Injury Section */}
        <div id="hip" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">9. Hip Flexor Injury</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Overuse, poor posture, or sudden movements.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Strengthening and stretching the hip flexors and surrounding muscles.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Hip Flexor Stretch <a href="https://youtu.be/example13" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Leg Raises <a href="https://youtu.be/example14" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Mountain Climbers <a href="https://youtu.be/example15" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>

        {/* Shoulder Injury Section */}
        <div id="shoulder" className="mb-12 p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600">10. Shoulder Injury</h2>
          <p className="mt-4 text-gray-700">
            <strong>Cause:</strong> Overhead movements, poor posture, or impact during contact sports.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Prevention:</strong> Strengthening the rotator cuff muscles and proper warm-ups.
          </p>
          <h3 className="text-xl font-semibold mt-4 text-blue-600">Strengthening Exercises</h3>
          <ul className="space-y-2 mt-2">
            <li>• Shoulder Rotations <a href="https://youtu.be/example16" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Lateral Raises <a href="https://youtu.be/example17" className="text-blue-500 hover:underline">Watch Video</a></li>
            <li>• Push-ups <a href="https://youtu.be/example18" className="text-blue-500 hover:underline">Watch Video</a></li>
          </ul>
        </div>
      </div>
      

      <div className="w-full max-w-4xl mx-auto text-center p-6">
        <h2 className="text-2xl font-extrabold mb-6">Important Tips to Remember</h2>
        <div className="relative w-full h-40 bg-black flex items-center justify-center rounded-lg p-4">
          <p className="text-2xl font-bold text-white text-center max-w-2xl">{tips[currentIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default InjuryPage;
