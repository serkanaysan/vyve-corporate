import { CORE_FEATURES } from "./data";
import FeatureCard from './feature-card';

export function CoreFeatures() {
  return (
    <section className="py-30 bg-gray-100 dark:bg-white/1 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-bold text-gray-800 text-3xl dark:text-white/90 md:text-title-lg max-w-xl mx-auto">
            Core Features of our Tools
          </h2>

          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Unlock the Potential of Innovation. Discover the Advanced AI Tools
            Transforming Your Ideas into Reality with Unmatched Precision and
            Intelligence.
          </p>
        </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature) => (
            // eslint-disable-next-line
            <FeatureCard key={feature.title} feature={feature as any} />
          ))}
        </div>
      </div>
    </section>
  );
}
