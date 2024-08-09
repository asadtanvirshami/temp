import React from 'react';

interface SidebarButtonProps {
  icon: string;
  text: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, text }) => (
  <div className="flex gap-5 px-5 py-4 text-center bg-violet-50 rounded-md border border-solid border-neutral-300">
    <img loading="lazy" src={icon} className="shrink-0 aspect-square w-[27px]" alt="" />
    <div className="flex-auto my-auto">{text}</div>
  </div>
);

const Sidebar: React.FC = () => {
  const buttons = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/170e3d7210dc4fcc029ea87e1bea929e7011d5fa21fe2f37b855856b29c17f35?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Add New Record" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b556f4d1a3e506d68101ec7ec488032511eedf86d8380213522b9746f79925eb?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Next Record" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/20cec6693b858d9a525f15f20b4a089760b13ac8f87c8adedd5f06f4603e903e?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Print Invoice" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06406184c9e47cd1d14e0b16485b22e22a96527654b61a2d13cb7ffd8c4b0c38?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "FoxTow Web site" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcef243f3546d8ffb0d77ae0d6456e8de2ef49deeba6203a74a875769f367694?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Next Screen" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/74800dce8bb13e3a601080802ba44ed57fdbf290db2596472b72c3a5f57b052c?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Previous Record" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6dcf9734ee924296cd4a4849b82390d348dda07ea7875bc70d35730927686545?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Search" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ddbff79fb2d88dfa20b4f5901a323b91672e2b9bb9f0b3fb1aa1294d7ba4128?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Close Call Screen" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0b6c1099059209ef181e1acadd675fa879d17f75b7039e9d601c4a8d8301dcb?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&", text: "Wizard" }
  ];

  return (
    <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-base font-medium text-neutral-500 max-md:mt-7">
        {buttons.map((button, index) => (
          <div key={index} className={index > 0 ? "mt-2.5" : ""}>
            <SidebarButton icon={button.icon} text={button.text} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;