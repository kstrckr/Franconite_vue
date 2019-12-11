import router from '@/router';

export class NavItem {

  name: string;
  targetRoute: string;

  constructor(name: string) {
    this.name = name;
    this.targetRoute = this.name.toLowerCase();
  }

  clicked() {
    router.push({ name: this.targetRoute });
  }
}