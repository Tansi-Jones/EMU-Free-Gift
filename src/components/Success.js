import React from "react";
import { useState, Fragment } from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

export const Success = () => {
  const [modal, setModal] = useState(true);

  function close() {
    setModal(false);
  }

  return (
    <>
      <section>
        <Transition appear show={modal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={close}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white py-8 px-6 text-left align-middle shadow-xl transition-all">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <BadgeCheckIcon className="h-14 text-green-500 text-center" />
                      </div>
                      <h2 className="text-xl text-center text-slate-800 font-semibold">
                        Thank you for registering!
                      </h2>
                      <p className="text-slate-500 text-xs text-center">
                        Your gift will start downloading any second now...
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </>
  );
};
