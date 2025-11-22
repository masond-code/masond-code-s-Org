import React, { useState } from 'react';
import { Wand2, Loader2, ImagePlus } from 'lucide-react';
import { generateMallImage } from '../services/geminiService';

export const AIBackground: React.FC = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [promptType, setPromptType] = useState<string>('atrium');

  const handleGenerate = async () => {
    setLoading(true);
    let promptText = "";
    switch(promptType) {
      case 'atrium': promptText = "grand atrium of a modern mall with glass roof and palm trees"; break;
      case 'exterior': promptText = "modern exterior facade of a shopping mall at sunset with neon lights"; break;
      case 'foodcourt': promptText = "bustling food court with modern furniture and hanging lights"; break;
      default: promptText = "modern shopping mall interior";
    }

    const image = await generateMallImage(promptText);
    if (image) {
      setGeneratedImage(image);
    }
    setLoading(false);
  };

  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-transparent animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-xs font-bold tracking-wider uppercase mb-6">
              <Wand2 size={14} />
              <span>Powered by Nano Banana AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Visualize the Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Retail Experience
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Use our AI concept generator to see unique artistic interpretations of Temmy Park Mall's architectural vision.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['atrium', 'exterior', 'foodcourt'].map(type => (
                <button
                  key={type}
                  onClick={() => setPromptType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    promptType === type 
                    ? 'bg-white text-slate-900 shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
            >
              {loading ? <Loader2 className="animate-spin" /> : <ImagePlus />}
              {loading ? "Generating Art..." : "Generate View"}
            </button>
            {!process.env.API_KEY && (
               <p className="mt-2 text-xs text-red-400 opacity-80">API Key required for generation.</p>
            )}
          </div>

          <div className="relative aspect-square md:aspect-[4/3] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
            {loading ? (
              <div className="text-center p-8">
                <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mx-auto mb-4" />
                <p className="text-indigo-200 animate-pulse">Consulting the AI Architect...</p>
              </div>
            ) : generatedImage ? (
              <img src={generatedImage} alt="Generated Mall Concept" className="w-full h-full object-cover animate-in fade-in duration-700" />
            ) : (
              <div className="text-center p-8 text-slate-500">
                 <img 
                  src="https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Placeholder"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
                 />
                 <div className="relative z-10 bg-slate-900/80 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                   <ImagePlus className="w-12 h-12 mx-auto mb-2 opacity-50" />
                   <p>Select a view and click generate</p>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};