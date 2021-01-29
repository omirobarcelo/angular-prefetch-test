# Angular Prefetch Test
This demo showcases the use of a centralized HTTP request service and resource specific services, naive request caching, route resolvers with a loading indicator, and a prefetching directive.  
The aim of this demo is to improve UX in Angular apps.

## Centralized and Resource Specific Services
The use of a centralized HTTP request service simplifies introducing logic to be applied to the whole app. And in case of using the environment to extract the API URL, we only need to inject the envioronment in one service. 

Resource specific services abstract the logic for requesting each resource, improving type safety, and making it much easier to refract the frontend in front of any change in the backend. With only one entry point to the backend, isolating where a bug comes from becomes trivial.

## Naive Request Caching
Caching the result of the HTTP requests becomes quite straightforward with a centralized HTTP request service.  
In this demo, I use the the resource path and the arguments as keys for the cache, and save the result indefinitely. 

## Route Resolvers with Loading
Angular's route resolvers provide data to the component before the component even loads. This can be used to avoid errors --component loading without all the necessary data-- or to improve UX --the component does't awkardly load bit by bit as data arrives. The resolve can also be used as a middleware for SEO manipulation, exemplified in this demo with a comment.

The problem with resolvers, specifically if used to improve UX, is that the component won't start loading until the data has resolved. All without an indication about it. The end user would experience it as the click not being registered, or the page not responding. To avoid that, and give the proper feedback, the main app component listens for `ResolveStart` and `ResolveEnd` events, to show or hide a loading indicator. 

## Prefetching Directive
This directive, attached to links linking to lazy-loaded modules in this demo, is intended to improve UX by fetching the data necessary for the landing component of the module when the user hovers over the link.  
With the naive cache in place, when the user decides to click on the link, the data would already be loaded, creating a seemless experience.

## Future Work
There is much to improve in this demo.  

The cache is never invalidated and the implementation is too simple to be production ready.  

The resolvers need to be considered for each case, to decide what is the minimum amount of data necessary for the component to render fast.  

The loading indicator is quick and dirty, and should be substitued for a proper implementation, custom or form a component library. It can also be activated with a loading service, so we can show it at any time, and not only on resolve.  

The prefetching directive is not very scalable. Every time we implement a new resource service, we would need to add it, and it doesn't accept input arguments for the service method. A proper rethinking is needed to make it usable in production applications.
