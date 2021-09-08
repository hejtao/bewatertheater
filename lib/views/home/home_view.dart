import 'package:flutter/material.dart';
import 'package:bewatertheater/widgets/centered_view/centered_view.dart';
import 'package:bewatertheater/widgets/navigation_bar/navigation_bar.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.black87,
          title: CenteredView(
                child: NavigationBar(),
              ),
          
        ),
        body: ListView(
          children: [
            Container(
              height: MediaQuery.of(context).size.height,
              // width: MediaQuery.of(context).size.width,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage("assets/bg.png"),
                  fit: BoxFit.cover,
                ),
              ),
              child: null,
            ),
            Container(
              // padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 10),
              height: MediaQuery.of(context).size.height,
              child: Card(
                margin: EdgeInsets.all(15.0),
                color: Colors.blue,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
              ),
            ),
          Container(
              height: MediaQuery.of(context).size.height,
              child: Card(
                margin: EdgeInsets.all(15.0),
                color: Colors.red,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
              ),
            ),
            Container(
              height: MediaQuery.of(context).size.height,
              child: Card(
                margin: EdgeInsets.all(15.0),
                color: Colors.green,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
              ),
            ),
          
          
          ],
        ));
  }
}
