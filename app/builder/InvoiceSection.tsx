import React from 'react';

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  extended: number;
}

const InvoiceSection: React.FC = () => {
  const invoiceItems: InvoiceItem[] = [
    { description: "Towing", quantity: 1, price: 230.00, extended: 230.00 },
    { description: "Storage : Daily Impound Rate", quantity: 3, price: 130.00, extended: 390.00 },
    { description: "Forklift", quantity: 1, price: 50.00, extended: 50.00 },
    { description: "Lien Free", quantity: 1, price: 70.00, extended: 70.00 }
  ];

  const total = invoiceItems.reduce((sum, item) => sum + item.extended, 0);

  return (
    <section className="mt-11 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center items-start px-16 py-5 text-base text-center text-white whitespace-nowrap bg-blue-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between ml-20 max-w-full w-[721px] max-md:flex-wrap">
          <div>Description</div>
          <div>Quant</div>
          <div>Price</div>
          <div>Extended</div>
        </div>
      </div>
      {invoiceItems.map((item, index) => (
        <div key={index} className="flex gap-5 justify-between items-center px-px mt-10 ml-24 max-w-full text-base text-center text-black w-[754px] max-md:flex-wrap">
          <div>{item.description}</div>
          <div className="flex gap-5 justify-between p-1.5">
            <div>{item.quantity.toString().padStart(2, '0')}</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcae45bfad2f36a8864136ce2ca5e668f1285cd75442fbaec65ecda4e99f542?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 w-6 aspect-square" alt="" />
          </div>
          <div>{item.price.toFixed(2)}</div>
          <div>{item.extended.toFixed(2)}</div>
        </div>
      ))}
      <div className="shrink-0 mt-3.5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
      <div className="flex flex-col self-start mt-5 ml-24 text-base text-center text-neutral-500 max-md:ml-2.5">
        <div>Click here and choose Item</div>
        <div className="mt-5">Discount</div>
      </div>
      <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
      <div className="flex gap-5 justify-between mt-6 ml-24 max-w-full text-base font-medium text-center text-black whitespace-nowrap w-[745px] max-md:flex-wrap">
        <div>Total</div>
        <div>${total.toFixed(2)}</div>
      </div>
    </section>
  );
};

export default InvoiceSection;