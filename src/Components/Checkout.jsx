import React from 'react'
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    <Link to="/">
                        <div className='w-max ml-4 lg:ml-[50px] bg-black flex px-4 justify-between cursor-pointer items-center py-2 rounded'>
                            <div className='text-white text-2xl font[700]'><IoReturnUpBackSharp /></div>
                            <h1 className='text-white ml-3'>Back</h1>
                        </div>
                    </Link>
                <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div class="min-w-0 flex-1 space-y-8">
                            <div class="space-y-4">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                                        <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                                    </div>

                                    <div>
                                        <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                                        <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
                                        </div>
                                        <select id="select-country-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                            <option selected>Pakistan</option>
                                        </select>
                                    </div>

                                    <div>
                                        <div class="mb-2 flex items-center gap-2">
                                            <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                                        </div>
                                        <select id="select-city-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                            <option selected>Lahore</option>
                                            <option value="NY">Islabad</option>
                                            <option value="LA">Faisalabad</option>
                                            <option value="CH">Multan</option>
                                            <option value="HU">Sargodha</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
                                        <div class="flex items-center">

                                            <div class="relative w-full">
                                                <input type="text" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label>
                                        <input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                                    </div>

                                    <div>
                                        <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                                        <input type="text" id="company_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" required />
                                    </div>

                                    <div>
                                        <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
                                        <input type="text" id="vat_number" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" required />
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

                                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="flex items-start">
                                            <div class="flex h-5 items-center">
                                                <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                                            </div>

                                            <div class="ms-4 text-sm">
                                                <label for="credit-card" class="font-medium leading-none text-gray-900 dark:text-white"> Credit Card </label>
                                                <p id="credit-card-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Pay with your credit card</p>
                                            </div>
                                        </div>

                                        <div class="mt-4 flex items-center gap-2">
                                            <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                                            <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                                            <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                                        </div>
                                    </div>

                                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="flex items-start">
                                            <div class="flex h-5 items-center">
                                                <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                            </div>

                                            <div class="ms-4 text-sm">
                                                <label for="pay-on-delivery" class="font-medium leading-none text-gray-900 dark:text-white"> Payment on delivery </label>
                                                <p id="pay-on-delivery-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">+$15 payment processing fee</p>
                                            </div>
                                        </div>

                                        <div class="mt-4 flex items-center gap-2">
                                            <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                                            <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                                            <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                                        </div>
                                    </div>

                                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="flex items-start">
                                            <div class="flex h-5 items-center">
                                                <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                            </div>

                                            <div class="ms-4 text-sm">
                                                <label for="paypal-2" class="font-medium leading-none text-gray-900 dark:text-white"> Paypal account </label>
                                                <p id="paypal-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Connect to your account</p>
                                            </div>
                                        </div>

                                        <div class="mt-4 flex items-center gap-2">
                                            <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                                            <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                                            <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Methods</h3>

                                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="flex items-start">
                                            <div class="flex h-5 items-center">
                                                <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                                            </div>

                                            <div class="ms-4 text-sm">
                                                <label for="dhl" class="font-medium leading-none text-gray-900 dark:text-white"> $15 - DHL Fast Delivery </label>
                                                <p id="dhl-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Tommorow</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="flex items-start">
                                            <div class="flex h-5 items-center">
                                                <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                            </div>

                                            <div class="ms-4 text-sm">
                                                <label for="fedex" class="font-medium leading-none text-gray-900 dark:text-white"> Free Delivery - FedEx </label>
                                                <p id="fedex-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Friday, 13 Dec 2023</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div class="flex items-start">
                                            <div class="flex h-5 items-center">
                                                <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                            </div>

                                            <div class="ms-4 text-sm">
                                                <label for="express" class="font-medium leading-none text-gray-900 dark:text-white"> $49 - Express Delivery </label>
                                                <p id="express-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it today</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
                                <div class="flex max-w-md items-center gap-4">
                                    <input type="text" id="voucher" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                                    <button type="button" class="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                            <div class="flow-root">
                                <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">RS:2,094.00</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                        <dd class="text-base font-medium text-green-500">0</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">RS:99</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                        <dd class="text-base font-medium text-gray-900 dark:text-white">RS:199</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between gap-4 py-3">
                                        <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd class="text-base font-bold text-gray-900 dark:text-white">RS:2,392.00</dd>
                                    </dl>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Checkout