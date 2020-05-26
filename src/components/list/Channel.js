import Component from "../Component.js";
import * as listService from "./listService.js";

export default class Channel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel } = this.props;

    return `<div data-channel="${channel.title}" class="channel">
            <a target="_blank" rel="noopener noreferrer" href="${
              channel.customUrl
            }">
            <img
            class="img--default"
            width="${channel.thumbnails.default.width}"
            height="${channel.thumbnails.default.height}"
              src="${channel.thumbnails.default.url}"
              alt="${channel.description}"
            />
            <img
            class="img--medium"
            width="${channel.thumbnails.medium.width}"
            height="${channel.thumbnails.medium.height}"
              src="${channel.thumbnails.medium.url}"
              alt="${channel.description}"
            />
            </a>
            <h3>${channel.title}</h3>
            <div class="channel__info-row">
              <div>
                <div class="channel__label">subscribers</div>
                <div class="channel__value">${listService.formatIntegerValue(
                  channel.statistics.subscriberCount
                )}</div>
              </div>
              <div>
              <div class="channel__label">videos</div>
              <div class="channel__value">${listService.formatIntegerValue(
                channel.statistics.videoCount
              )}</div>
              </div>
              <div>
              <div class="channel__label">views</div>
              <div class="channel__value">${listService.formatIntegerValue(
                channel.statistics.viewCount
              )}</div>
              </div>
            </div>
          </div>`;
  }
}
