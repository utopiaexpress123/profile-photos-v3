/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/WJcVn7VLiFa
 */
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
export interface ChevronDownIcon {
  className?: string;
}

export function FaqAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="space-y-2">
        <div className="flex flex-col space-y-1">
          <h3 className="text-lg font-medium leading-none">What can I create with Shadcn?</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Anything you'd like! Shadcn is a design system and component library that provides you with a variety of
            components and styles that you can use to build your web applications.
          </p>
        </div>
        <Collapsible className="rounded-lg border border-gray-200 dark:border-gray-800">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between w-full p-4">
              <span className="text-sm font-medium">How is Shadcn different from other component libraries?</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent asChild>
            <div className="p-4 text-sm">
              Shadcn is designed to be highly composable, allowing you to mix and match components to create your own
              unique designs. It also focuses on accessibility, performance, and customization, providing you with the
              tools you need to create web applications that are beautiful, functional, and user-friendly.
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="rounded-lg border border-gray-200 dark:border-gray-800">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between w-full p-4">
              <span className="text-sm font-medium">Can I customize the look and feel of Shadcn components?</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent asChild>
            <div className="p-4 text-sm">
              Yes! Shadcn provides you with a theming system that allows you to easily customize the colors, typography,
              and other visual aspects of the components to match your brand or design system. You can also use CSS to
              further style the components to your liking.
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="rounded-lg border border-gray-200 dark:border-gray-800">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between w-full p-4">
              <span className="text-sm font-medium">Are Shadcn components accessible?</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent asChild>
            <div className="p-4 text-sm">
              Absolutely! Accessibility is a top priority for Shadcn. The components are designed and tested to ensure
              that they meet modern accessibility standards, making them usable by all people, including those using
              assistive technologies such as screen readers or keyboard navigation.
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="rounded-lg border border-gray-200 dark:border-gray-800">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between w-full p-4">
              <span className="text-sm font-medium">Can I use Shadcn with my existing React or Next.js project?</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent asChild>
            <div className="p-4 text-sm">
              Yes, you can! Shadcn is designed to be framework-agnostic, which means you can use it with any frontend
              framework or library, including React, Next.js, Vue.js, Svelte, and more. Shadcn provides components that
              work seamlessly with these frameworks, allowing you to integrate them into your projects with ease.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}



