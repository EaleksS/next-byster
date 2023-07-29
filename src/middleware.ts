import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "ru"];
export let defaultLocale = "en";

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) {
    headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  let locale = getLocale(request) ?? defaultLocale;
  const pathname = request.nextUrl.pathname;

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.rewrite(newUrl);
}

export const config = {
  // matcher: [
  //   // Skip all internal paths (_next)
  //   "/((?!_next|api|favicon.ico).*)",
  //   // Optional: only run on root (/) URL
  //   // '/'
  // ],
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// Import cookies-next library
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// import { i18n } from "../i18n-config";

// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// function getLocale(request: NextRequest): string | undefined {
// 	// Negotiator expects plain object so we need to transform headers
// 	const negotiatorHeaders: Record<string, string> = {};
// 	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

// 	// Use negotiator and intl-localematcher to get best locale
// 	let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

// 	// @ts-ignore locales are readonly
// 	const locales: string[] = i18n.locales;

// 	return matchLocale(languages, locales, i18n.defaultLocale);
// }

// export function middleware(request: NextRequest) {
// 	const { pathname, searchParams } = request.nextUrl;

// 	if (
// 		[
// 			"/manifest.json",
// 			"/favicon.ico",
// 			"/next.svg",
// 			"/vercel.svg",
// 			"/thirteen.svg",
// 			"/sitemap.xml",
// 			"/sitemap-0.xml",
// 			"/sitemap-*.xml",
// 			"/images/*.jpg",
// 			"/*.jpg",
// 			"/*.svg",
// 			"/*.png",
// 			"/og.jpg",
// 		].includes(pathname)
// 	)
// 		return;

// 	if (pathname.startsWith(`/${i18n.defaultLocale}/`) || pathname === `/${i18n.defaultLocale}`) {
// 		const newUrl = new URL(
// 			pathname.replace(`/${i18n.defaultLocale}`, pathname === `/${i18n.defaultLocale}` ? "/" : ""),
// 			request.url
// 		);
// 		newUrl.search = searchParams.toString();
// 		return NextResponse.redirect(newUrl, { status: 301 });
// 	}

// 	const pathnameIsMissingLocale = i18n.locales.every(
// 		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
// 	);

// 	if (pathnameIsMissingLocale) {
// 		const newUrl = new URL(`/${i18n.defaultLocale}${pathname}`, request.url);
// 		newUrl.search = searchParams.toString();
// 		return NextResponse.rewrite(newUrl);
// 	}
// }

// export const config = {
// 	matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
// };