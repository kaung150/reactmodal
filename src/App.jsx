import React, { useState } from "react";
import MyModal from "./MyModal";

const App = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => {
    setShowMyModal(false);
  };

  return (
    <div className="bg-blue-100 px-10">
      <button
        className="bg-red-500 rounded-lg p-2 mt-5 ml-5"
        onClick={(ev) => setShowMyModal(true)}
      >
        Open Model
      </button>

      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam
        nobis blanditiis pariatur tempora ratione sequi perferendis accusamus
        dolorem iure fugiat, praesentium delectus vel quidem corporis,
        reiciendis ut, voluptas tempore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam autem magnam eos unde laborum? Magnam nihil
        aspernatur ab voluptate iure ducimus sint amet dolore accusamus,
        suscipit quo? Necessitatibus, deleniti odio? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, dolor quibusdam odit nam
        similique excepturi, quasi deleniti eveniet quas incidunt aperiam
        dolorem ducimus, sequi maiores voluptatibus ipsa delectus qui! Eos!
        Lorem ipsum, dolor sit amet ceonsectetur adipisicing elit. Magni eveniet
        suscipit velit dolores, consequatur soluta a unde veniam ipsam odit nemo
        voluptatem porro voluptas placeat, neque quis laborum fugiat pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
        recusandae amet quis, fugiat blanditiis exercitationem officia minus
        aspernatur provident labore ad ea aliquid hic aut asperiores dignissimos
        et consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos nihil aliquid corrupti beatae error laudantium! Saepe aperiam
        facilis, ex ipsa illo quaerat totam, itaque vel culpa neque delectus
        dolorum minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Itaque nam nobis blanditiis pariatur tempora ratione sequi perferendis
        accusamus dolorem iure fugiat, praesentium delectus vel quidem corporis,
        reiciendis ut, voluptas tempore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam autem magnam eos unde laborum? Magnam nihil
        aspernatur ab voluptate iure ducimus sint amet dolore accusamus,
        suscipit quo? Necessitatibus, deleniti odio? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, dolor quibusdam odit nam
        similique excepturi, quasi deleniti eveniet quas incidunt aperiam
        dolorem ducimus, sequi maiores voluptatibus ipsa delectus qui! Eos!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eveniet
        suscipit velit dolores, consequatur soluta a unde veniam ipsam odit nemo
        voluptatem porro voluptas placeat, neque quis laborum fugiat pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
        recusandae amet quis, fugiat blanditiis exercitationem officia minus
        aspernatur provident labore ad ea aliquid hic aut asperiores dignissimos
        et consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos nihil aliquid corrupti beatae error laudantium! Saepe aperiam
        facilis, ex ipsa illo quaerat totam, itaque vel culpa neque delectus
        dolorum minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Itaque nam nobis blanditiis pariatur tempora ratione sequi perferendis
        accusamus dolorem iure fugiat, praesentium delectus vel quidem corporis,
        reiciendis ut, voluptas tempore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam autem magnam eos unde laborum? Magnam nihil
        aspernatur ab voluptate iure ducimus sint amet dolore accusamus,
        suscipit quo? Necessitatibus, deleniti odio? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, dolor quibusdam odit nam
        similique excepturi, quasi deleniti eveniet quas incidunt aperiam
        dolorem ducimus, sequi maiores voluptatibus ipsa delectus qui! Eos!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eveniet
        suscipit velit dolores, consequatur soluta a unde veniam ipsam odit nemo
        voluptatem porro voluptas placeat, neque quis laborum fugiat pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
        recusandae amet quis, fugiat blanditiis exercitationem officia minus
        aspernatur provident labore ad ea aliquid hic aut asperiores dignissimos
        et consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos nihil aliquid corrupti beatae error laudantium! Saepe aperiam
        facilis, ex ipsa illo quaerat totam, itaque vel culpa neque delectus
        dolorum minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Itaque nam nobis blanditiis pariatur tempora ratione sequi perferendis
        accusamus dolorem iure fugiat, praesentium delectus vel quidem corporis,
        reiciendis ut, voluptas tempore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam autem magnam eos unde laborum? Magnam nihil
        aspernatur ab voluptate iure ducimus sint amet dolore accusamus,
        suscipit quo? Necessitatibus, deleniti odio? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, dolor quibusdam odit nam
        similique excepturi, quasi deleniti eveniet quas incidunt aperiam
        dolorem ducimus, sequi maiores voluptatibus ipsa delectus qui! Eos!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eveniet
        suscipit velit dolores, consequatur soluta a unde veniam ipsam odit nemo
        voluptatem porro voluptas placeat, neque quis laborum fugiat pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
        recusandae amet quis, fugiat blanditiis exercitationem officia minus
        aspernatur provident labore ad ea aliquid hic aut asperiores dignissimos
        et consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos nihil aliquid corrupti beatae error laudantium! Saepe aperiam
        facilis, ex ipsa illo quaerat totam, itaque vel culpa neque delectus
        dolorum minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Itaque nam nobis blanditiis pariatur tempora ratione sequi perferendis
        accusamus dolorem iure fugiat, praesentium delectus vel quidem corporis,
        reiciendis ut, voluptas tempore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veniam autem magnam eos unde laborum? Magnam nihil
        aspernatur ab voluptate iure ducimus sint amet dolore accusamus,
        suscipit quo? Necessitatibus, deleniti odio? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Corporis, dolor quibusdam odit nam
        similique excepturi, quasi deleniti eveniet quas incidunt aperiam
        dolorem ducimus, sequi maiores voluptatibus ipsa delectus qui! Eos!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eveniet
        suscipit velit dolores, consequatur soluta a unde veniam ipsam odit nemo
        voluptatem porro voluptas placeat, neque quis laborum fugiat pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
        recusandae amet quis, fugiat blanditiis exercitationem officia minus
        aspernatur provident labore ad ea aliquid hic aut asperiores dignissimos
        et consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos nihil aliquid corrupti beatae error laudantium! Saepe aperiam
        facilis, ex ipsa illo quaerat totam, itaque vel culpa neque delectus
        dolorum minus.
      </h1>

      <MyModal visable={showMyModal} onClose={handleOnClose} />
    </div>
  );
};

export default App;
