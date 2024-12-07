import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex h-screen min-w-full flex-col justify-between">
      <HomeNavBar />

      <div className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <div className="flex justify-between px-14 py-10">
          <div className="flex w-96 flex-col gap-7">
            <p className="text-7xl">Get sense of your financial data</p>
            <p>
              Effortlessly track your transactions and gain powerful insights
              into your financial data. See where your money goes, visualize
              trends, and take control of your financial future—all in one
              intuitive platform.
            </p>
            <Button className="py-6 text-xl font-bold">
              Try Finance for free
            </Button>
          </div>
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
        </div>

        <div
          id="features"
          className="flex items-center justify-between px-14 py-10"
        >
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">Comprehensive Transaction Tracking</p>
            <p>
              Automatically sync your accounts or input transactions manually.
              Stay on top of your expenses, income, and financial habits with
              real-time updates.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between px-14 py-10">
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">Visualize Your Data</p>
            <p>
              Interactive charts and graphs make it easy to understand your
              spending patterns, compare categories, and identify areas for
              improvement.
            </p>
          </div>
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
        </div>

        <div className="flex items-center justify-between px-14 py-10">
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">Financial Insights Made Easy</p>
            <p>
              Receive automatic summaries and actionable tips based on your
              financial data to help you save more and spend smarter.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between px-14 py-10">
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">Customizable and Secure</p>
            <p>
              Tailor the platform to fit your unique financial goals. Your data
              is encrypted and privacy is our top priority.
            </p>
          </div>
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
}
