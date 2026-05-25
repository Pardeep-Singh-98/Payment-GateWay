import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Pricing() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pricing
                </h2>
            }
        >
            <Head title="Pricing" />

            <section className="bg-gray-50 dark:bg-gray-950">
                <div className="max-w-screen-xl mx-auto py-20">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Pricing Plans
                        </h1>
                        <p className="mt-4 px-4 text-lg font-normal mb-8 sm:max-w-xl lg:max-w-full w-full mx-auto text-center text-gray-700 dark:text-gray-200">
                            Get started in complete confidence. Our 30-day
                            money-back guarantee means it's risk-free.
                        </p>
                        <div className="flex items-center justify-center gap-3 mb-12">
                            <p className="text-gray-700 dark:text-gray-200 text-base font-medium">
                                Monthly
                            </p>
                            <p className="text-gray-700 dark:text-gray-200 text-base font-medium">
                                Yearly
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 mx-4 md:mx-0 md:px-6 lg:grid-cols-3 sm:grid-cols-2 xl:w-11/12 xl:mx-auto box-border">
                        <div className="e-card e-bigger py-10 rounded-3xl shadow-none hover:border-primary-600 dark:hover:border-primary-400 bg-white px-6 border-gray-500">
                            <div className="e-card-content">
                                <div>
                                    <div className="flex flex-wrap justify-between">
                                        <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-5 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900"></span>
                                    </div>
                                    <h1 className="text-2xl font-medium text-gray-900 dark:text-white">
                                        Single
                                    </h1>
                                    <p className="mt-2 text-gray-700 dark:text-gray-200 text-base font-normal truncate">
                                        A great solution for beginners
                                    </p>
                                </div>
                                <div className="my-5 text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h2 className="text-5xl font-bold leading-tight">
                                            ₹699
                                        </h2>
                                        <span className="line-through text-gray-500 dark:text-gray-400 font-normal text-3xl mt-1">
                                            ₹1999
                                        </span>
                                    </div>
                                    <p className="text-base font-normal text-gray-700 dark:text-gray-200">
                                        per month ₹699 billed Monthly
                                    </p>
                                </div>
                                <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-200">
                                    Create one end product for a client,
                                    transfer that end product to your client,
                                    charge them for your services.
                                </p>
                            </div>
                            <div className="e-card-actions leading-9 text-center">
                                {/* <ResponsiveNavLink
                                    href={route(
                                        "checkout",
                                        "price_1TXfBwSGYhlPOZM2xWOaR9WQ",
                                    )}
                                    active={route().current("pricing")}
                                    className="bg-indigo-600 px-6 text-white rounded-full flex justify-center font-sans"
                                >
                                    Choose Plan
                                </ResponsiveNavLink> */}
                                <a
                                    href={route(
                                        "checkout",
                                        "price_1TXfBwSGYhlPOZM2xWOaR9WQ",
                                    )}
                                    className="bg-indigo-600 text-white rounded-full flex justify-center font-sans"
                                >
                                    Choose Plan
                                </a>
                            </div>
                        </div>
                        <div className="e-card e-bigger py-10 rounded-3xl shadow-none hover:border-primary-600 dark:hover:border-primary-400 bg-white px-6 border-gray-500">
                            <div className="e-card-content">
                                <div>
                                    <div className="flex flex-wrap justify-between">
                                        <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-5 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900"></span>
                                        <span className="e-badge e-badge-pill e-bigger bg-orange-100 dark:bg-orange-100 text-orange-700 dark:text-orange-600">
                                            Most popular
                                        </span>
                                    </div>
                                    <h1 className="text-2xl font-medium text-gray-900 dark:text-white">
                                        Premium
                                    </h1>
                                    <p className="mt-2 text-gray-700 dark:text-gray-200 text-base font-normal truncate">
                                        All you need to create your website
                                    </p>
                                </div>
                                <div className="my-5 text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h2 className="text-5xl font-bold leading-tight">
                                            ₹1799
                                        </h2>
                                        <span className="line-through text-gray-500 dark:text-gray-400 font-normal text-3xl mt-1">
                                            ₹2799
                                        </span>
                                    </div>
                                    <p className="text-base font-normal text-gray-700 dark:text-gray-200">
                                        per month ₹1799 billed Quartly
                                    </p>
                                </div>
                                <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-200">
                                    Create one end product for a client,
                                    transfer that end product to your client,
                                    charge them for your services.
                                </p>
                            </div>
                            <div className="e-card-actions leading-9">
                                {/* <ResponsiveNavLink
                                    href={route(
                                        "checkout",
                                        "price_1TXfBwSGYhlPOZM2xWOaR9WQ",
                                    )}
                                    active={route().current("pricing")}
                                    className="bg-indigo-600 px-6 text-white rounded-full flex justify-center font-sans"
                                >
                                    Choose Plan
                                </ResponsiveNavLink> */}
                                <a
                                    href={route(
                                        "checkout",
                                        "price_1TXfBwSGYhlPOZM217RaUmLR",
                                    )}
                                    className="bg-indigo-600 text-white rounded-full flex justify-center font-sans"
                                >
                                    Choose Plan
                                </a>
                            </div>
                        </div>
                        <div className="e-card e-bigger py-10 rounded-3xl shadow-none hover:border-primary-600 dark:hover:border-primary-400 bg-white px-6 border-gray-500">
                            <div className="e-card-content">
                                <div>
                                    <div className="flex flex-wrap justify-between">
                                        <span className="e-avatar-xlarge e-avatar e-icons e-group-icon e-avatar-circle mb-5 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900"></span>
                                    </div>
                                    <h1 className="text-2xl font-medium text-gray-900 dark:text-white">
                                        Business
                                    </h1>
                                    <p className="mt-2 text-gray-700 dark:text-gray-200 text-base font-normal truncate">
                                        Level up with more powerful features
                                    </p>
                                </div>
                                <div className="my-5 text-gray-900 dark:text-white">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h2 className="text-5xl font-bold leading-tight">
                                            ₹7999
                                        </h2>
                                        <span className="line-through text-gray-500 dark:text-gray-400 font-normal text-3xl mt-1">
                                            $8999
                                        </span>
                                    </div>
                                    <p className="text-base font-normal text-gray-700 dark:text-gray-200">
                                        per month $2,988 billed yearly
                                    </p>
                                </div>
                                <p className="mb-2 text-base font-normal text-gray-700 dark:text-gray-200">
                                    Create one end product for a client,
                                    transfer that end product to your client,
                                    charge them for your services.
                                </p>
                            </div>
                            <div className="e-card-actions leading-9">
                                {/* <ResponsiveNavLink
                                    href={route(
                                        "checkout",
                                        "price_1TXfBwSGYhlPOZM2L7STMfbK",
                                    )}
                                    active={route().current("pricing")}
                                    className="bg-indigo-600 px-6 text-white rounded-full flex justify-center font-sans"
                                >
                                    Choose Plan
                                </ResponsiveNavLink> */}
                                <a
                                    href={route(
                                        "checkout",
                                        "price_1TXfBwSGYhlPOZM2L7STMfbK",
                                    )}
                                    className="bg-indigo-600 text-white rounded-full flex justify-center font-sans"
                                >
                                    Choose Plan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
