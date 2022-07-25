import Image from "next/image";
import { type } from "os";
import { FunctionComponent } from "react";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Icon3 from "../../../assets/icon3.png";

type Faq = {
    key: string,
    title: string,
    description: string,
}

type Props = {
    // faqList: Faq[]
};

export const listFaq: Faq[] = [
  {
    key: "faq1",
    title: "What happens after I submit my car details?",
    description: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`,
  },
  {
    key: "faq2",
    title: "What happens after I submit my car details?",
    description: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`,
  },
  {
    key: "faq3",
    title: "What happens after I submit my car details?",
    description: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`,
  },
];

export const FaqSection: FunctionComponent<Props> = ({}) => {
  return (
    <div className="faqs">
      <div className="row">
        <div className="col-12 text-center position-relative">
          <h2 className="text-uppercase">faqs</h2>
        </div>
      </div>
      <div className="my-5">
        <div className="accordion" id="accordionExample">
          {listFaq?.map((faq) => (
            <div className="card" key={faq?.key}>
              <div
                className="card-header collapsed"
                data-bs-toggle="collapse"
                data-bs-target={`#${faq?.key}`}
                aria-expanded="true"
              >
                <span className="title">{faq?.title}</span>
                <span className="accicon">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
              <div
                id={faq?.key}
                className="collapse"
                data-parent="#accordionExample"
              >
                <div className="card-body">{faq?.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
